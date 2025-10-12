# Standalone Functions

> [!NOTE]
> This section is useful if you are using a bundler and targetting browsers and
> runtimes where the size of an application affects performance and load times. 

Every method in this SDK is also available as a standalone function. This
alternative API is suitable when targetting the browser or serverless runtimes
and using a bundler to build your application since all unused functionality
will be tree-shaken away. This includes code for unused methods, Zod schemas,
encoding helpers and response handlers. The result is dramatically smaller
impact on the application's final bundle size which grows very slowly as you use
more and more functionality from this SDK.

Calling methods through the main SDK class remains a valid and generally more
more ergonomic option. Standalone functions represent an optimisation for a
specific category of applications.

## Example

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { transcoderStartTranscodeSession } from "@lukehagar/plexjs/funcs/transcoderStartTranscodeSession.js";
import { Extension, StartTranscodeSessionLocation, StartTranscodeSessionProtocol } from "@lukehagar/plexjs/sdk/models/operations";
import { Accepts, AdvancedSubtitles, BoolInt, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
});

async function run() {
  const res = await transcoderStartTranscodeSession(plexAPI, {
    transcodeType: TranscodeType.Music,
    extension: Extension.Mpd,
    advancedSubtitles: AdvancedSubtitles.Burn,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.One,
    autoAdjustSubtitle: BoolInt.One,
    directPlay: BoolInt.One,
    directStream: BoolInt.One,
    directStreamAudio: BoolInt.One,
    disableResolutionRotation: BoolInt.One,
    hasMDE: BoolInt.One,
    location: StartTranscodeSessionLocation.Wan,
    mediaBufferSize: 102400,
    mediaIndex: 0,
    musicBitrate: 5000,
    offset: 90.5,
    partIndex: 0,
    path: "/library/metadata/151671",
    peakBitrate: 12000,
    photoResolution: "1080x1080",
    protocol: StartTranscodeSessionProtocol.Dash,
    secondsPerSegment: 5,
    subtitleSize: 50,
    videoBitrate: 12000,
    videoQuality: 50,
    videoResolution: "1080x1080",
    xPlexClientProfileExtra: "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transcoderStartTranscodeSession failed:", res.error);
  }
}

run();
```

## Result types

Standalone functions differ from SDK methods in that they return a
`Result<Value, Error>` type to capture _known errors_ and document them using
the type system. By avoiding throwing errors, application code maintains clear
control flow and error-handling become part of the regular flow of application
code.

> We use the term "known errors" because standalone functions, and JavaScript
> code in general, can still throw unexpected errors such as `TypeError`s,
> `RangeError`s and `DOMException`s. Exhaustively catching all errors may be
> something this SDK addresses in the future. Nevertheless, there is still a lot
> of benefit from capturing most errors and turning them into values.

The second reason for this style of programming is because these functions will
typically be used in front-end applications where exception throwing is
sometimes discouraged or considered unidiomatic. React and similar ecosystems
and libraries tend to promote this style of programming so that components
render useful content under all states (loading, success, error and so on).

The general pattern when calling standalone functions looks like this:

```typescript
import { Core } from "<sdk-package-name>";
import { fetchSomething } from "<sdk-package-name>/funcs/fetchSomething.js";

const client = new Core();

async function run() {
  const result = await fetchSomething(client, { id: "123" });
  if (!result.ok) {
    // You can throw the error or handle it. It's your choice now.
    throw result.error;
  }

  console.log(result.value);
}

run();
```

Notably, `result.error` above will have an explicit type compared to a try-catch
variation where the error in the catch block can only be of type `unknown` (or
`any` depending on your TypeScript settings).
<!-- Start SDK Example Usage [usage] -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import {
  Extension,
  StartTranscodeSessionLocation,
  StartTranscodeSessionProtocol,
} from "@lukehagar/plexjs/sdk/models/operations";
import {
  Accepts,
  AdvancedSubtitles,
  BoolInt,
  TranscodeType,
} from "@lukehagar/plexjs/sdk/models/shared";

const plexAPI = new PlexAPI({
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
  const result = await plexAPI.transcoder.startTranscodeSession({
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
    xPlexClientProfileExtra:
      "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
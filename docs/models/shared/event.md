# Event

Event type that triggered the webhook.

## Example Usage

```typescript
import { Event } from "@parke.dev/plexjs/models/shared";

let value: Event = Event.MediaPlay;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `MediaPlay`            | media.play             |
| `MediaPause`           | media.pause            |
| `MediaResume`          | media.resume           |
| `MediaStop`            | media.stop             |
| `MediaScrobble`        | media.scrobble         |
| `MediaRate`            | media.rate             |
| `LibraryNew`           | library.new            |
| `LibraryOnDeck`        | library.on.deck        |
| -                      | `Unrecognized<string>` |
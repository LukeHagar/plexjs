# PlaylistType

limit to a type of playlist.

## Example Usage

```typescript
import { PlaylistType } from "@lukehagar/plexjs/sdk/models/operations";

let value: PlaylistType = PlaylistType.Video;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Audio`                | audio                  |
| `Video`                | video                  |
| `Photo`                | photo                  |
| -                      | `Unrecognized<string>` |
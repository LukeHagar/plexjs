# TranscodeSubtitlesSubtitles

Indicates how subtitles should be included: * 'auto' - Compute the appropriate subtitle setting automatically * 'burn' - Burn the selected subtitle; auto if no selected subtitle * 'none' - Ignore all subtitle streams * 'sidecar' - The selected subtitle should be provided as a sidecar * 'embedded' - The selected subtitle should be provided as an embedded stream * 'segmented' - The selected subtitle should be provided as a segmented stream


## Example Usage

```typescript
import { TranscodeSubtitlesSubtitles } from "@lukehagar/plexjs/sdk/models/operations";

let value: TranscodeSubtitlesSubtitles = TranscodeSubtitlesSubtitles.Burn;
```

## Values

| Name        | Value       |
| ----------- | ----------- |
| `Auto`      | auto        |
| `Burn`      | burn        |
| `None`      | none        |
| `Sidecar`   | sidecar     |
| `Embedded`  | embedded    |
| `Segmented` | segmented   |
| `Unknown`   | unknown     |
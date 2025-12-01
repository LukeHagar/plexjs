# GetPlaylistGeneratorSubtitles

## Example Usage

```typescript
import { GetPlaylistGeneratorSubtitles } from "@lukehagar/plexjs/models/operations";

let value: GetPlaylistGeneratorSubtitles = GetPlaylistGeneratorSubtitles.Auto;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Auto`                 | auto                   |
| `Burn`                 | burn                   |
| `None`                 | none                   |
| `Sidecar`              | sidecar                |
| `Embedded`             | embedded               |
| `Segmented`            | segmented              |
| -                      | `Unrecognized<string>` |
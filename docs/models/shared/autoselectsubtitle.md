# AutoSelectSubtitle

The auto-select subtitle mode (0 = Manually selected, 1 = Shown with foreign audio, 2 = Always enabled)

## Example Usage

```typescript
import { AutoSelectSubtitle } from "@parke.dev/plexjs/models/shared";

let value: AutoSelectSubtitle = AutoSelectSubtitle.ShownWithForeignAudio;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `ManuallySelected`      | 0                       |
| `ShownWithForeignAudio` | 1                       |
| `AlwaysEnabled`         | 2                       |
| -                       | `Unrecognized<number>`  |
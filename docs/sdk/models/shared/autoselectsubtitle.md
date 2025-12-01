# AutoSelectSubtitle

The auto-select subtitle mode (0 = Manually selected, 1 = Shown with foreign audio, 2 = Always enabled)

## Example Usage

```typescript
import { AutoSelectSubtitle } from "@lukehagar/plexjs/sdk/models/shared";

let value: AutoSelectSubtitle = AutoSelectSubtitle.ShownWithForeignAudio;
```

## Values

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `ManuallySelected`      | 0                       |
| `ShownWithForeignAudio` | 1                       |
| `AlwaysEnabled`         | 2                       |
# CreateMarkerType

## Example Usage

```typescript
import { CreateMarkerType } from "@lukehagar/plexjs/models/operations";

let value: CreateMarkerType = CreateMarkerType.Intro;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Intro`                | intro                  |
| `Commercial`           | commercial             |
| `Bookmark`             | bookmark               |
| `Resume`               | resume                 |
| `Credit`               | credit                 |
| -                      | `Unrecognized<string>` |
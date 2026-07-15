# TypeResponse

## Example Usage

```typescript
import { TypeResponse } from "@parke.dev/plexjs/models/shared";

let value: TypeResponse = TypeResponse.Bookmark;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Intro`                | intro                  |
| `Commercial`           | commercial             |
| `Bookmark`             | bookmark               |
| `Resume`               | resume                 |
| `Credit`               | credit                 |
| -                      | `Unrecognized<string>` |
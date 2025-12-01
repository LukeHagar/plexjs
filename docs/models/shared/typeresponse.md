# TypeResponse

## Example Usage

```typescript
import { TypeResponse } from "@lukehagar/plexjs/models/shared";

let value: TypeResponse = TypeResponse.Bookmark;
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
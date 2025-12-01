# DefaultEnum

If present, this sort is the default and in this direction

## Example Usage

```typescript
import { DefaultEnum } from "@lukehagar/plexjs/models/shared";

let value: DefaultEnum = DefaultEnum.Asc;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Asc`                  | asc                    |
| `Desc`                 | desc                   |
| -                      | `Unrecognized<string>` |
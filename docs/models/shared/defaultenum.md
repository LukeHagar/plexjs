# DefaultEnum

If present, this sort is the default and in this direction

## Example Usage

```typescript
import { DefaultEnum } from "@parke.dev/plexjs/models/shared";

let value: DefaultEnum = DefaultEnum.Asc;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Asc`                  | asc                    |
| `Desc`                 | desc                   |
| -                      | `Unrecognized<string>` |
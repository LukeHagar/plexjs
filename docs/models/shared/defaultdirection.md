# DefaultDirection

This default diction of this sort

## Example Usage

```typescript
import { DefaultDirection } from "@lukehagar/plexjs/models/shared";

let value: DefaultDirection = DefaultDirection.Desc;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Asc`                  | asc                    |
| `Desc`                 | desc                   |
| -                      | `Unrecognized<string>` |
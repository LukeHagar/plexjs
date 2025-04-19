# Filter

Filter

## Example Usage

```typescript
import { Filter } from "@lukehagar/plexjs/sdk/models/operations";

let value: Filter = Filter.Available;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `All`                  | all                    |
| `Available`            | available              |
| `Released`             | released               |
| -                      | `Unrecognized<string>` |
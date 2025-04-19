# Level

An integer log level to write to the PMS log with.
0: Error
1: Warning
2: Info
3: Debug
4: Verbose


## Example Usage

```typescript
import { Level } from "@lukehagar/plexjs/sdk/models/operations";

let value: Level = Level.Two;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Zero`                 | 0                      |
| `One`                  | 1                      |
| `Two`                  | 2                      |
| `Three`                | 3                      |
| `Four`                 | 4                      |
| -                      | `Unrecognized<number>` |
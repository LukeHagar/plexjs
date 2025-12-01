# AiringsType

## Example Usage

```typescript
import { AiringsType } from "@lukehagar/plexjs/models/shared";

let value: AiringsType = AiringsType.NewAndRepeatAirings;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `NewAiringsOnly`       | New Airings Only       |
| `NewAndRepeatAirings`  | New and Repeat Airings |
| -                      | `Unrecognized<string>` |
# SettingType

The type of the value of this setting

## Example Usage

```typescript
import { SettingType } from "@lukehagar/plexjs/models/shared";

let value: SettingType = SettingType.Double;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Bool`                 | bool                   |
| `Int`                  | int                    |
| `Text`                 | text                   |
| `Double`               | double                 |
| -                      | `Unrecognized<string>` |
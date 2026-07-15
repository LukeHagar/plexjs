# SettingType

The type of the value of this setting

## Example Usage

```typescript
import { SettingType } from "@parke.dev/plexjs/models/shared";

let value: SettingType = SettingType.Double;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Bool`                 | bool                   |
| `Int`                  | int                    |
| `Text`                 | text                   |
| `Double`               | double                 |
| -                      | `Unrecognized<string>` |
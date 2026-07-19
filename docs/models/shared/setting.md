# Setting

A configuration setting or preference

## Example Usage

```typescript
import { Setting, SettingType } from "@parke.dev/plexjs/models/shared";

let value: Setting = {
  type: SettingType.Bool,
  default: "string value",
  advanced: true,
  enumValues: "string value",
  group: "string value",
  hidden: true,
  id: "string value",
  label: "string value",
  summary: "string value",
  value: "string value",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [shared.SettingType](../../models/shared/settingtype.md)                                                 | :heavy_minus_sign:                                                                                       | The type of the value of this setting                                                                    |
| `default`                                                                                                | *shared.Default*                                                                                         | :heavy_minus_sign:                                                                                       | The default value of this setting                                                                        |
| `advanced`                                                                                               | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether the setting is considered advanced and normally hidden from the user                             |
| `enumValues`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The possible values for this setting if restricted. The list is `\|` separated with `value:name` entries. |
| `group`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The group name of this setting to aid in display of a hierarchy                                          |
| `hidden`                                                                                                 | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether the setting is hidden or not                                                                     |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The query parameter name for this setting                                                                |
| `label`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A user-friendly name for the setting                                                                     |
| `summary`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A description of the setting                                                                             |
| `value`                                                                                                  | *shared.Value*                                                                                           | :heavy_minus_sign:                                                                                       | The current value of this setting                                                                        |
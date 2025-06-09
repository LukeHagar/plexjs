# GetMediaMetaDataMarker

The final status of the marker

## Example Usage

```typescript
import { GetMediaMetaDataMarker } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataMarker = {
  id: 306970,
  type: "credits",
  startTimeOffset: 4176050,
  endTimeOffset: 4393389,
  final: true,
  attributes: {
    id: 306970,
    version: 4,
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 306970                                                                                                |
| `type`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | credits                                                                                               |
| `startTimeOffset`                                                                                     | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 4176050                                                                                               |
| `endTimeOffset`                                                                                       | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 4393389                                                                                               |
| `final`                                                                                               | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | true                                                                                                  |
| `attributes`                                                                                          | [operations.GetMediaMetaDataAttributes](../../../sdk/models/operations/getmediametadataattributes.md) | :heavy_minus_sign:                                                                                    | Attributes associated with the marker.                                                                |                                                                                                       |
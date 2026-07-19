# DecisionResult

## Example Usage

```typescript
import { DecisionResult } from "@parke.dev/plexjs/models/shared";

let value: DecisionResult = {
  availableBandwidth: 1,
  directPlayDecisionCode: 1,
  directPlayDecisionText: "string value",
  generalDecisionCode: 1,
  generalDecisionText: "string value",
  mdeDecisionCode: 1,
  mdeDecisionText: "string value",
  transcodeDecisionCode: 1,
  transcodeDecisionText: "string value",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `availableBandwidth`                                                                      | *number*                                                                                  | :heavy_minus_sign:                                                                        | The maximum bitrate set when item was added                                               |
| `directPlayDecisionCode`                                                                  | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `directPlayDecisionText`                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `generalDecisionCode`                                                                     | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `generalDecisionText`                                                                     | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `mdeDecisionCode`                                                                         | *number*                                                                                  | :heavy_minus_sign:                                                                        | The code indicating the status of evaluation of playback when client indicates `hasMDE=1` |
| `mdeDecisionText`                                                                         | *string*                                                                                  | :heavy_minus_sign:                                                                        | Descriptive text for the above code                                                       |
| `transcodeDecisionCode`                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `transcodeDecisionText`                                                                   | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
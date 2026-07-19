# Bandwidth

## Example Usage

```typescript
import { Bandwidth } from "@parke.dev/plexjs/models/shared";

let value: Bandwidth = {
  bandwidth: 1,
  resolution: "string value",
  time: 1,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `bandwidth`                                      | *number*                                         | :heavy_minus_sign:                               | The bandwidth at this time in kbps               |
| `resolution`                                     | *string*                                         | :heavy_minus_sign:                               | The user-friendly resolution at this time        |
| `time`                                           | *number*                                         | :heavy_minus_sign:                               | Media playback time where this bandwidth started |
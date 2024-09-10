# GetResourcesStatisticsResponseBody

Resource Statistics

## Example Usage

```typescript
import { GetResourcesStatisticsResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetResourcesStatisticsResponseBody = {
  mediaContainer: {
    size: 5497,
    statisticsResources: [
      {
        timespan: 6,
        at: 1718384427,
        hostCpuUtilization: 1.276,
        processCpuUtilization: 0.025,
        hostMemoryUtilization: 17.026,
        processMemoryUtilization: 0.493,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                          | [operations.GetResourcesStatisticsMediaContainer](../../../sdk/models/operations/getresourcesstatisticsmediacontainer.md) | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
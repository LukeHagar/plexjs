# GetResourcesStatisticsMediaContainer

## Example Usage

```typescript
import { GetResourcesStatisticsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetResourcesStatisticsMediaContainer = {
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
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `size`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 5497                                                                                      |
| `statisticsResources`                                                                     | [operations.StatisticsResources](../../../sdk/models/operations/statisticsresources.md)[] | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
# GetBandwidthStatisticsMediaContainer

## Example Usage

```typescript
import { GetBandwidthStatisticsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetBandwidthStatisticsMediaContainer = {
  size: 5497,
  device: [
    {
      id: 208,
      name: "Roku Express",
      platform: "Roku",
      clientIdentifier: "793095d235660625108ef785cc7646e9",
      createdAt: 1706470556,
    },
  ],
  account: [
    {
      id: 238960586,
      key: "/accounts/238960586",
      name: "Diane",
      defaultAudioLanguage: "en",
      autoSelectAudio: true,
      defaultSubtitleLanguage: "en",
      subtitleMode: 1,
      thumb: "https://plex.tv/users/50d83634246da1de/avatar?c=1707110967",
    },
  ],
  statisticsBandwidth: [
    {
      accountID: 238960586,
      deviceID: 208,
      timespan: 6,
      at: 1718387650,
      lan: true,
      bytes: 22,
    },
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `size`                                                                                                        | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           | 5497                                                                                                          |
| `device`                                                                                                      | [operations.GetBandwidthStatisticsDevice](../../../sdk/models/operations/getbandwidthstatisticsdevice.md)[]   | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `account`                                                                                                     | [operations.GetBandwidthStatisticsAccount](../../../sdk/models/operations/getbandwidthstatisticsaccount.md)[] | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `statisticsBandwidth`                                                                                         | [operations.StatisticsBandwidth](../../../sdk/models/operations/statisticsbandwidth.md)[]                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |                                                                                                               |
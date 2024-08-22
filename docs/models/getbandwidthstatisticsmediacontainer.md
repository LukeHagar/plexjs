# GetBandwidthStatisticsMediaContainer

## Example Usage

```typescript
import { GetBandwidthStatisticsMediaContainer } from "@lukehagar/plexjs";

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
            timespan: 6,
            at: 1718387650,
            lan: true,
            bytes: 22,
        },
    ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `size`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 5497                                                                                 |
| `device`                                                                             | [models.GetBandwidthStatisticsDevice](../models/getbandwidthstatisticsdevice.md)[]   | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `account`                                                                            | [models.GetBandwidthStatisticsAccount](../models/getbandwidthstatisticsaccount.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `statisticsBandwidth`                                                                | [models.StatisticsBandwidth](../models/statisticsbandwidth.md)[]                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
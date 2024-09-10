# GetStatisticsMediaContainer

## Example Usage

```typescript
import { GetStatisticsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetStatisticsMediaContainer = {
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
  statisticsMedia: [
    {
      accountID: 1,
      deviceID: 13,
      timespan: 4,
      at: 1707141600,
      metadataType: 4,
      count: 1,
      duration: 1555,
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `size`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 5497                                                                                      |
| `device`                                                                                  | [operations.GetStatisticsDevice](../../../sdk/models/operations/getstatisticsdevice.md)[] | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `account`                                                                                 | [operations.Account](../../../sdk/models/operations/account.md)[]                         | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `statisticsMedia`                                                                         | [operations.StatisticsMedia](../../../sdk/models/operations/statisticsmedia.md)[]         | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
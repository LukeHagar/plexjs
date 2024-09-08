# GetStatisticsResponseBody

Media Statistics

## Example Usage

```typescript
import { GetStatisticsResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetStatisticsResponseBody = {
    mediaContainer: {
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
    },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                        | [operations.GetStatisticsMediaContainer](../../../sdk/models/operations/getstatisticsmediacontainer.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
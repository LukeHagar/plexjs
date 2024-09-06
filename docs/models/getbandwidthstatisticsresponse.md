# GetBandwidthStatisticsResponse

## Example Usage

```typescript
import { GetBandwidthStatisticsResponse } from "@lukehagar/plexjs";

let value: GetBandwidthStatisticsResponse = {
    contentType: "<value>",
    statusCode: 916723,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    object: {
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
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `contentType`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | HTTP response content type for this operation                                                |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | HTTP response status code for this operation                                                 |
| `rawResponse`                                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                        | :heavy_check_mark:                                                                           | Raw HTTP response; suitable for custom response parsing                                      |
| `object`                                                                                     | [models.GetBandwidthStatisticsResponseBody](../models/getbandwidthstatisticsresponsebody.md) | :heavy_minus_sign:                                                                           | Bandwidth Statistics                                                                         |
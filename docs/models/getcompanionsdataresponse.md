# GetCompanionsDataResponse

## Example Usage

```typescript
import { GetCompanionsDataResponse } from "@lukehagar/plexjs";

let value: GetCompanionsDataResponse = {
    contentType: "<value>",
    statusCode: 87129,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    responseBodies: [
        {
            identifier: "tv.plex.sonos",
            baseURL: "https://sonos.plex.tv",
            title: "Sonos",
            linkURL: "https://sonos.plex.tv/link",
            provides: "client,player",
            token: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `responseBodies`                                                      | [models.ResponseBody](../models/responsebody.md)[]                    | :heavy_minus_sign:                                                    | Companions Data                                                       |
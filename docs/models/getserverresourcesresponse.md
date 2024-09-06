# GetServerResourcesResponse

## Example Usage

```typescript
import { GetServerResourcesResponse } from "@lukehagar/plexjs";

let value: GetServerResourcesResponse = {
    contentType: "<value>",
    statusCode: 568434,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `plexDevices`                                                         | [models.PlexDevice](../models/plexdevice.md)[]                        | :heavy_minus_sign:                                                    | List of Plex Devices. This includes Plex hosted servers and clients   |
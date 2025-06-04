# GetServerResourcesResponse

## Example Usage

```typescript
import { GetServerResourcesResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerResourcesResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `plexDevices`                                                           | [operations.PlexDevice](../../../sdk/models/operations/plexdevice.md)[] | :heavy_minus_sign:                                                      | List of Plex Devices. This includes Plex hosted servers and clients     |
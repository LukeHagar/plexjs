# GetServerPreferencesResponse

## Example Usage

```typescript
import { GetServerPreferencesResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerPreferencesResponse = {
  contentType: "<value>",
  statusCode: 304,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 161,
      setting: [
        {
          id: "EnableDatabaseTrace",
          label: "",
          summary: "",
          type: "bool",
          default: false,
          value: false,
          hidden: true,
          advanced: false,
          group: "",
          enumValues: "1:admin only|2:everyone",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `object`                                                                                                          | [operations.GetServerPreferencesResponseBody](../../../sdk/models/operations/getserverpreferencesresponsebody.md) | :heavy_minus_sign:                                                                                                | Server Preferences                                                                                                |
# GetUserFriendsResponse

## Example Usage

```typescript
import { GetUserFriendsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetUserFriendsResponse = {
  contentType: "<value>",
  statusCode: 640770,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `friends`                                                             | [operations.Friend](../../../sdk/models/operations/friend.md)[]       | :heavy_minus_sign:                                                    | Friends Data                                                          |
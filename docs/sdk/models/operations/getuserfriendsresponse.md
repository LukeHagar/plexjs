# GetUserFriendsResponse

## Example Usage

```typescript
import { GetUserFriendsResponse, Status } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetUserFriendsResponse = {
  contentType: "<value>",
  statusCode: 20218,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  friends: [
    {
      email: "username@email.com",
      friendlyName: "exampleUser",
      home: true,
      id: 0,
      restricted: false,
      sharedServers: [
        {},
      ],
      sharedSources: [
        {},
      ],
      status: Status.Accepted,
      thumb: "https://plex.tv/users/7d1916e0d8f6e76b/avatar?c=1694481578",
      title: "username123",
      username: "username123",
      uuid: "7d1916e0d8f6e76b",
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
| `friends`                                                             | [operations.Friend](../../../sdk/models/operations/friend.md)[]       | :heavy_minus_sign:                                                    | Friends Data                                                          |
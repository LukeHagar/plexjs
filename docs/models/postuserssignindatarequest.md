# PostUsersSigninDataRequest

## Example Usage

```typescript
import { PostUsersSigninDataRequest } from "@lukehagar/plexjs";

let value: PostUsersSigninDataRequest = {
    requestBody: {
        login: "username@email.com",
        password: "password123",
    },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xPlexClientIdentifier`                                                                                                                                               | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | The unique identifier for the client application<br/>This is used to track the client application and its usage<br/>(UUID, serial number, or other number unique per device)<br/> | Postman                                                                                                                                                               |
| `requestBody`                                                                                                                                                         | [models.PostUsersSigninDataRequestBody](../models/postuserssignindatarequestbody.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                    | Login credentials                                                                                                                                                     |                                                                                                                                                                       |
# PostUsersSignInDataRequest

## Example Usage

```typescript
import { PostUsersSignInDataRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: PostUsersSignInDataRequest = {
  requestBody: {
    login: "username@email.com",
    password: "password123",
    verificationCode: "123456",
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xPlexClientIdentifier`                                                                                                                                               | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | The unique identifier for the client application<br/>This is used to track the client application and its usage<br/>(UUID, serial number, or other number unique per device)<br/> | gcgzw5rz2xovp84b4vha3a40                                                                                                                                              |
| `requestBody`                                                                                                                                                         | [operations.PostUsersSignInDataRequestBody](../../../sdk/models/operations/postuserssignindatarequestbody.md)                                                         | :heavy_minus_sign:                                                                                                                                                    | Login credentials                                                                                                                                                     |                                                                                                                                                                       |
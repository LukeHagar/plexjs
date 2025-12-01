# PostUsersSignInDataRequestBody

Login credentials

## Example Usage

```typescript
import { PostUsersSignInDataRequestBody } from "@lukehagar/plexjs/models/operations";

let value: PostUsersSignInDataRequestBody = {
  login: "username@email.com",
  password: "password123",
  verificationCode: "123456",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `login`            | *string*           | :heavy_check_mark: | N/A                | username@email.com |
| `password`         | *string*           | :heavy_check_mark: | N/A                | password123        |
| `rememberMe`       | *boolean*          | :heavy_minus_sign: | N/A                |                    |
| `verificationCode` | *string*           | :heavy_minus_sign: | N/A                | 123456             |
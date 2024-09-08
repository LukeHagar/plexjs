# PostUsersSignInDataRequestBody

Login credentials

## Example Usage

```typescript
import { PostUsersSignInDataRequestBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: PostUsersSignInDataRequestBody = {
    login: "username@email.com",
    password: "password123",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `login`            | *string*           | :heavy_check_mark: | N/A                | username@email.com |
| `password`         | *string*           | :heavy_check_mark: | N/A                | password123        |
| `rememberMe`       | *boolean*          | :heavy_minus_sign: | N/A                |                    |
# GetUsersResponse

Successful response with media container data in JSON

## Example Usage

```typescript
import { GetUsersResponse } from "@parke.dev/plexjs/models/operations";

let value: GetUsersResponse = {
  mediaContainer: {
    friendlyName: "myPlex",
    identifier: "com.plexapp.plugins.myplex",
    machineIdentifier: "3dff4c4da3b1229a649aa574a9e2b419a684a20e",
    size: 30,
    totalSize: 30,
    user: [],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                       | [operations.GetUsersMediaContainer](../../models/operations/getusersmediacontainer.md) | :heavy_minus_sign:                                                                     | Container holding user and server details.                                             |
# PostUsersSignInDataServices

## Example Usage

```typescript
import { PostUsersSignInDataServices, PostUsersSignInDataStatus } from "@lukehagar/plexjs";

let value: PostUsersSignInDataServices = {
    identifier: "metadata-dev",
    endpoint: "https://epg.provider.plex.tv",
    token: "DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv",
    secret: "<value>",
    status: PostUsersSignInDataStatus.Online,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `identifier`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | metadata-dev                                                               |
| `endpoint`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | https://epg.provider.plex.tv                                               |
| `token`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv                                           |
| `secret`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `status`                                                                   | [models.PostUsersSignInDataStatus](../models/postuserssignindatastatus.md) | :heavy_check_mark:                                                         | N/A                                                                        | online                                                                     |
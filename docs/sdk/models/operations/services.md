# Services

## Example Usage

```typescript
import { GetUserDetailsStatus, Services } from "@lukehagar/plexjs/sdk/models/operations";

let value: Services = {
    identifier: "metadata-dev",
    endpoint: "https://epg.provider.plex.tv",
    token: "DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv",
    secret: "<value>",
    status: GetUserDetailsStatus.Online,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `identifier`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | metadata-dev                                                                              |
| `endpoint`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | https://epg.provider.plex.tv                                                              |
| `token`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv                                                          |
| `secret`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `status`                                                                                  | [operations.GetUserDetailsStatus](../../../sdk/models/operations/getuserdetailsstatus.md) | :heavy_check_mark:                                                                        | N/A                                                                                       | online                                                                                    |
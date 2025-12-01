# Service

## Example Usage

```typescript
import { Service, ServiceStatus } from "@lukehagar/plexjs/models/shared";

let value: Service = {
  identifier: "metadata-dev",
  endpoint: "https://epg.provider.plex.tv",
  token: "DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv",
  secret: "<value>",
  status: ServiceStatus.Online,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `identifier`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | metadata-dev                                                 |
| `endpoint`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | https://epg.provider.plex.tv                                 |
| `token`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv                             |
| `secret`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `status`                                                     | [shared.ServiceStatus](../../models/shared/servicestatus.md) | :heavy_check_mark:                                           | N/A                                                          | online                                                       |
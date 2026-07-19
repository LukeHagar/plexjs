# Service

## Example Usage

```typescript
import { Service, ServiceStatus } from "@parke.dev/plexjs/models/operations";

let value: Service = {
  endpoint: "https://epg.provider.plex.tv",
  identifier: "metadata-dev",
  secret: "<value>",
  status: ServiceStatus.Online,
  token: "DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `endpoint`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | https://epg.provider.plex.tv                                         |
| `identifier`                                                         | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | metadata-dev                                                         |
| `secret`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `status`                                                             | [operations.ServiceStatus](../../models/operations/servicestatus.md) | :heavy_check_mark:                                                   | N/A                                                                  | online                                                               |
| `token`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv                                     |
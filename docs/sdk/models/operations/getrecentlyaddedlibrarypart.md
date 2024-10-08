# GetRecentlyAddedLibraryPart

## Example Usage

```typescript
import { GetRecentlyAddedLibraryPart } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRecentlyAddedLibraryPart = {
  id: 120353,
  key: "/library/parts/120353/1681803203/file.mp4",
  duration: 7474422,
  file:
    "/movies/Ant-Man and the Wasp Quantumania (2023)/Ant-Man.and.the.Wasp.Quantumania.2023.1080p.mp4",
  size: 3395307162,
  container: "mp4",
  hasThumbnail: 1,
  videoProfile: "high",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 120353                                                                                          |
| `key`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | /library/parts/120353/1681803203/file.mp4                                                       |
| `duration`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 7474422                                                                                         |
| `file`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | /movies/Ant-Man and the Wasp Quantumania (2023)/Ant-Man.and.the.Wasp.Quantumania.2023.1080p.mp4 |
| `size`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 3395307162                                                                                      |
| `container`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | mp4                                                                                             |
| `has64bitOffsets`                                                                               | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `hasThumbnail`                                                                                  | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 1                                                                                               |
| `optimizedForStreaming`                                                                         | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `videoProfile`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | high                                                                                            |
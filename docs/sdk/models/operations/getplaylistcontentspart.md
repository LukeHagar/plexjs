# GetPlaylistContentsPart

## Example Usage

```typescript
import { GetPlaylistContentsPart } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetPlaylistContentsPart = {
  id: 15,
  key: "/library/parts/15/1705637151/file.mp4",
  duration: 141416,
  file: "/movies/Serenity (2005)/Serenity (2005).mp4",
  size: 40271948,
  audioProfile: "lc",
  container: "mp4",
  has64bitOffsets: false,
  optimizedForStreaming: false,
  videoProfile: "high",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *number*                                    | :heavy_minus_sign:                          | N/A                                         | 15                                          |
| `key`                                       | *string*                                    | :heavy_minus_sign:                          | N/A                                         | /library/parts/15/1705637151/file.mp4       |
| `duration`                                  | *number*                                    | :heavy_minus_sign:                          | N/A                                         | 141416                                      |
| `file`                                      | *string*                                    | :heavy_minus_sign:                          | N/A                                         | /movies/Serenity (2005)/Serenity (2005).mp4 |
| `size`                                      | *number*                                    | :heavy_minus_sign:                          | N/A                                         | 40271948                                    |
| `audioProfile`                              | *string*                                    | :heavy_minus_sign:                          | N/A                                         | lc                                          |
| `container`                                 | *string*                                    | :heavy_minus_sign:                          | N/A                                         | mp4                                         |
| `has64bitOffsets`                           | *boolean*                                   | :heavy_minus_sign:                          | N/A                                         | false                                       |
| `optimizedForStreaming`                     | *boolean*                                   | :heavy_minus_sign:                          | N/A                                         | false                                       |
| `videoProfile`                              | *string*                                    | :heavy_minus_sign:                          | N/A                                         | high                                        |
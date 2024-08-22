# GetLibraryHubsPart

## Example Usage

```typescript
import { GetLibraryHubsPart } from "@lukehagar/plexjs";

let value: GetLibraryHubsPart = {
    id: 38247,
    key: "/library/parts/38247/1589412494/file.mp4",
    duration: 6017237,
    file: "/movies/Tangled (2010)/Tangled (2010) Bluray-1080p.mp4",
    size: 1545647447,
    audioProfile: "lc",
    container: "mp4",
    has64bitOffsets: false,
    optimizedForStreaming: true,
    videoProfile: "high",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    | 38247                                                  |
| `key`                                                  | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | /library/parts/38247/1589412494/file.mp4               |
| `duration`                                             | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    | 6017237                                                |
| `file`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | /movies/Tangled (2010)/Tangled (2010) Bluray-1080p.mp4 |
| `size`                                                 | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    | 1545647447                                             |
| `audioProfile`                                         | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | lc                                                     |
| `container`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | mp4                                                    |
| `has64bitOffsets`                                      | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    | false                                                  |
| `optimizedForStreaming`                                | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    | true                                                   |
| `videoProfile`                                         | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | high                                                   |
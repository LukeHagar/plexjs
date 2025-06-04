# GetMediaPostersMediaContainer

## Example Usage

```typescript
import { GetMediaPostersMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaPostersMediaContainer = {
  size: 50,
  mediaTagVersion: 1734362201,
  mediaTagPrefix: "/system/bundle/media/flags/",
  identifier: "com.plexapp.plugins.library",
  metadata: [],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `size`                                                                                            | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of media items returned in this response.                                                  | 50                                                                                                |
| `mediaTagVersion`                                                                                 | *number*                                                                                          | :heavy_check_mark:                                                                                | The version number for media tags.                                                                | 1734362201                                                                                        |
| `mediaTagPrefix`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | The prefix used for media tag resource paths.                                                     | /system/bundle/media/flags/                                                                       |
| `identifier`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | An plugin identifier for the media container.                                                     | com.plexapp.plugins.library                                                                       |
| `metadata`                                                                                        | [operations.GetMediaPostersMetadata](../../../sdk/models/operations/getmediapostersmetadata.md)[] | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
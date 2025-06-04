# GetMediaMetaDataMediaContainer

## Example Usage

```typescript
import { GetMediaMetaDataMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataMediaContainer = {
  size: 50,
  allowSync: false,
  identifier: "com.plexapp.plugins.library",
  librarySectionID: 2,
  librarySectionTitle: "TV Series",
  librarySectionUUID: "e69655a2-ef48-4aba-bb19-0cc34d1e7d36",
  mediaTagPrefix: "/system/bundle/media/flags/",
  mediaTagVersion: 1734362201,
  metadata: [],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `size`                                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | Number of media items returned in this response.                                                    | 50                                                                                                  |
| `allowSync`                                                                                         | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | Indicates whether syncing is allowed.                                                               | false                                                                                               |
| `identifier`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | An plugin identifier for the media container.                                                       | com.plexapp.plugins.library                                                                         |
| `librarySectionID`                                                                                  | *number*                                                                                            | :heavy_check_mark:                                                                                  | The unique identifier for the library section.                                                      | 2                                                                                                   |
| `librarySectionTitle`                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | The title of the library section.                                                                   | TV Series                                                                                           |
| `librarySectionUUID`                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The universally unique identifier for the library section.                                          | e69655a2-ef48-4aba-bb19-0cc34d1e7d36                                                                |
| `mediaTagPrefix`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | The prefix used for media tag resource paths.                                                       | /system/bundle/media/flags/                                                                         |
| `mediaTagVersion`                                                                                   | *number*                                                                                            | :heavy_check_mark:                                                                                  | The version number for media tags.                                                                  | 1734362201                                                                                          |
| `metadata`                                                                                          | [operations.GetMediaMetaDataMetadata](../../../sdk/models/operations/getmediametadatametadata.md)[] | :heavy_check_mark:                                                                                  | An array of metadata items.                                                                         |                                                                                                     |
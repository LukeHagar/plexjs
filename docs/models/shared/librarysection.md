# LibrarySection

## Example Usage

```typescript
import { LibrarySection, MediaTypeString } from "@parke.dev/plexjs/models/shared";

let value: LibrarySection = {
  title: "string value",
  type: MediaTypeString.Movie,
  agent: "string value",
  allowSync: true,
  art: "string value",
  composite: "string value",
  content: true,
  contentChangedAt: 1,
  createdAt: 1,
  directory: true,
  filters: true,
  hidden: true,
  key: "string value",
  language: "string value",
  location: [
    {
      id: 1,
    },
  ],
  refreshing: true,
  scannedAt: 1,
  scanner: "string value",
  thumb: "string value",
  updatedAt: 1,
  uuid: "string value",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `title`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | The title of the library                                                                    | Movies                                                                                      |
| `type`                                                                                      | [shared.MediaTypeString](../../models/shared/mediatypestring.md)                            | :heavy_check_mark:                                                                          | The type of media content in the Plex library. This can represent videos, music, or photos. | movie                                                                                       |
| `agent`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `allowSync`                                                                                 | *shared.LibrarySectionAllowSyncUnion*                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `art`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `composite`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `content`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `contentChangedAt`                                                                          | *number*                                                                                    | :heavy_minus_sign:                                                                          | Unix epoch datetime in seconds                                                              | 1556281940                                                                                  |
| `createdAt`                                                                                 | *number*                                                                                    | :heavy_minus_sign:                                                                          | Unix epoch datetime in seconds                                                              | 1556281940                                                                                  |
| `directory`                                                                                 | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `filters`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Indicates whether this section has filtering capabilities                                   |                                                                                             |
| `hidden`                                                                                    | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `key`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | /library/metadata/1                                                                         |
| `language`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `location`                                                                                  | [shared.LibrarySectionLocation](../../models/shared/librarysectionlocation.md)[]            | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `refreshing`                                                                                | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Indicates whether this library section is currently scanning                                |                                                                                             |
| `scannedAt`                                                                                 | *number*                                                                                    | :heavy_minus_sign:                                                                          | Unix epoch datetime in seconds                                                              | 1556281940                                                                                  |
| `scanner`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `thumb`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | /library/metadata/1/thumb/1234567890                                                        |
| `updatedAt`                                                                                 | *number*                                                                                    | :heavy_minus_sign:                                                                          | Unix epoch datetime in seconds                                                              | 1556281940                                                                                  |
| `uuid`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | The universally unique identifier for the library.                                          | e69655a2-ef48-4aba-bb19-d3cc3401e7d6                                                        |
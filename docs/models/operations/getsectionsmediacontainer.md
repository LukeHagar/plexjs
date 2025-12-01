# GetSectionsMediaContainer

`MediaContainer` is the root element of most Plex API responses. It serves as a generic container for various types of content (Metadata, Hubs, Directories, etc.) and includes pagination information (offset, size, totalSize) when applicable.
Common attributes: - identifier: Unique identifier for this container - size: Number of items in this response page - totalSize: Total number of items available (for pagination) - offset: Starting index of this page (for pagination)
The container often "hoists" common attributes from its children. For example, if all tracks in a container share the same album title, the `parentTitle` attribute may appear on the MediaContainer rather than being repeated on each track.


## Example Usage

```typescript
import { GetSectionsMediaContainer } from "@lukehagar/plexjs/models/operations";
import { MediaTypeString } from "@lukehagar/plexjs/models/shared";

let value: GetSectionsMediaContainer = {
  directory: [
    {
      title: "Movies",
      type: MediaTypeString.Movie,
      contentChangedAt: 1556281940,
      createdAt: 1556281940,
      language: "<value>",
      uuid: "e69655a2-ef48-4aba-bb19-d3cc3401e7d6",
      scannedAt: 1556281940,
      updatedAt: 1556281940,
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                                                             | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `offset`                                                                                                                                 | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The offset of where this container page starts among the total objects available. Also provided in the `X-Plex-Container-Start` header.<br/> |
| `size`                                                                                                                                   | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `totalSize`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The total size of objects available. Also provided in the `X-Plex-Container-Total-Size` header.<br/>                                     |
| `allowSync`                                                                                                                              | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `directory`                                                                                                                              | [shared.LibrarySection](../../models/shared/librarysection.md)[]                                                                         | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `title1`                                                                                                                                 | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Typically just "Plex Library"                                                                                                            |
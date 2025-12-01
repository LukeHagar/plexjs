# GetPersonMediaContainer

`MediaContainer` is the root element of most Plex API responses. It serves as a generic container for various types of content (Metadata, Hubs, Directories, etc.) and includes pagination information (offset, size, totalSize) when applicable.
Common attributes: - identifier: Unique identifier for this container - size: Number of items in this response page - totalSize: Total number of items available (for pagination) - offset: Starting index of this page (for pagination)
The container often "hoists" common attributes from its children. For example, if all tracks in a container share the same album title, the `parentTitle` attribute may appear on the MediaContainer rather than being repeated on each track.


## Example Usage

```typescript
import { GetPersonMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetPersonMediaContainer = {
  directory: [
    {
      filter: "actor=49",
      ratingKey: "58683",
      role: "Secretary",
      tag: "Shaun Lawton",
      tagKey: "5d3ee12c4cde6a001c3e0b27",
      thumb:
        "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
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
| `directory`                                                                                                                              | [shared.Tag](../../../sdk/models/shared/tag.md)[]                                                                                        | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
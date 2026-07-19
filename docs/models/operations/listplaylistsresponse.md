# ListPlaylistsResponse

## Example Usage

```typescript
import { ListPlaylistsResponse } from "@parke.dev/plexjs/models/operations";

let value: ListPlaylistsResponse = {
  headers: {},
  result: {
    mediaContainer: {
      identifier: "com.plexapp.plugins.library",
      size: 1,
      metadata: [],
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `result`                                                                                               | [shared.MediaContainerWithPlaylistMetadata](../../models/shared/mediacontainerwithplaylistmetadata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.plugins.library",<br/>"size": 1,<br/>"Metadata": []<br/>}<br/>} |
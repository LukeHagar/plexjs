# GetSectionsResponse

## Example Usage

```typescript
import { GetSectionsResponse } from "@lukehagar/plexjs/models/operations";
import { MediaTypeString } from "@lukehagar/plexjs/models/shared";

let value: GetSectionsResponse = {
  headers: {},
  result: {
    mediaContainer: {
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
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [operations.GetSectionsResponseBody](../../models/operations/getsectionsresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
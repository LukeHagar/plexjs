# GetSectionsResponseBody

OK

## Example Usage

```typescript
import { GetSectionsResponseBody } from "@lukehagar/plexjs/models/operations";
import { MediaTypeString } from "@lukehagar/plexjs/models/shared";

let value: GetSectionsResponseBody = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                             | [operations.GetSectionsMediaContainer](../../models/operations/getsectionsmediacontainer.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
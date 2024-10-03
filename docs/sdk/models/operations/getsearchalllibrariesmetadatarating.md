# GetSearchAllLibrariesMetaDataRating

## Example Usage

```typescript
import { GetSearchAllLibrariesMetaDataRating } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesMetaDataRating = {
  image: "themoviedb://image.rating",
  value: 3,
  type: "audience",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `image`                                      | *string*                                     | :heavy_check_mark:                           | A URI or path to the rating image.           | themoviedb://image.rating                    |
| `value`                                      | *number*                                     | :heavy_check_mark:                           | The value of the rating.                     | 3                                            |
| `type`                                       | *string*                                     | :heavy_check_mark:                           | The type of rating (e.g., audience, critic). | audience                                     |
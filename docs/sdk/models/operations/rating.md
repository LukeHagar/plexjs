# Rating

## Example Usage

```typescript
import { Rating } from "@lukehagar/plexjs/sdk/models/operations";

let value: Rating = {
  image: "imdb://image.rating",
  value: 9,
  type: "audience",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `image`                                      | *string*                                     | :heavy_check_mark:                           | The image or reference for the rating.       | imdb://image.rating                          |
| `value`                                      | *number*                                     | :heavy_check_mark:                           | The rating value.                            | 9                                            |
| `type`                                       | *string*                                     | :heavy_check_mark:                           | The type of rating (e.g., audience, critic). | audience                                     |
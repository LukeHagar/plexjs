# Rating

The type of rating, for example 'audience' or 'critic'.

## Example Usage

```typescript
import { Rating } from "@lukehagar/plexjs/sdk/models/operations";

let value: Rating = {
  image: "imdb://image.rating",
  value: 5.1,
  type: "audience",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `image`             | *string*            | :heavy_check_mark:  | N/A                 | imdb://image.rating |
| `value`             | *number*            | :heavy_check_mark:  | N/A                 | 5.1                 |
| `type`              | *string*            | :heavy_check_mark:  | N/A                 | audience            |
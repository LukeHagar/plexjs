# Ratings

## Example Usage

```typescript
import { Ratings } from "@lukehagar/plexjs/sdk/models/operations";

let value: Ratings = {
    image: "themoviedb://image.rating",
    value: 7.4,
    type: "audience",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `image`                   | *string*                  | :heavy_minus_sign:        | N/A                       | themoviedb://image.rating |
| `value`                   | *number*                  | :heavy_minus_sign:        | N/A                       | 7.4                       |
| `type`                    | *string*                  | :heavy_minus_sign:        | N/A                       | audience                  |
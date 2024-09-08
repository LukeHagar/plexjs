# GetThumbImageRequest

## Example Usage

```typescript
import { GetThumbImageRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetThumbImageRequest = {
    ratingKey: 9518,
    width: 396,
    height: 396,
    minSize: 1,
    upscale: 1,
    xPlexToken: "CV5xoxjTpFKUzBTShsaf",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `ratingKey`                                           | *number*                                              | :heavy_check_mark:                                    | the id of the library item to return the children of. | 9518                                                  |
| `width`                                               | *number*                                              | :heavy_check_mark:                                    | N/A                                                   | 396                                                   |
| `height`                                              | *number*                                              | :heavy_check_mark:                                    | N/A                                                   | 396                                                   |
| `minSize`                                             | *number*                                              | :heavy_check_mark:                                    | N/A                                                   | 1                                                     |
| `upscale`                                             | *number*                                              | :heavy_check_mark:                                    | N/A                                                   | 1                                                     |
| `xPlexToken`                                          | *string*                                              | :heavy_check_mark:                                    | Plex Authentication Token                             | CV5xoxjTpFKUzBTShsaf                                  |
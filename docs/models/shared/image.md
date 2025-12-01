# Image

Images such as movie posters and background artwork are represented by Image elements.


## Example Usage

```typescript
import { Image } from "@lukehagar/plexjs/models/shared";

let value: Image = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [shared.ImageType](../../models/shared/imagetype.md)               | :heavy_minus_sign:                                                 | Describes both the purpose and intended presentation of the image. |
| `alt`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | Title to use for accessibility.                                    |
| `url`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | The relative path or absolute url for the image.                   |
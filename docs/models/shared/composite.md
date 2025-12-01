# Composite

## Example Usage

```typescript
import { Composite } from "@lukehagar/plexjs/models/shared";

let value: Composite = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `type`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Limit composite to specified metadata types                                 |
| `format`                                                                    | [shared.Format](../../models/shared/format.md)                              | :heavy_minus_sign:                                                          | The image type                                                              |
| `backgroundColor`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | 6 character hex RGB value for background color for image                    |
| `border`                                                                    | *number*                                                                    | :heavy_minus_sign:                                                          | The width of the intra-image border                                         |
| `cols`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Number of columns to construct in the composite image                       |
| `crop`                                                                      | [shared.Crop](../../models/shared/crop.md)                                  | :heavy_minus_sign:                                                          | Where to crop source images to fit into composite image proportions         |
| `height`                                                                    | *number*                                                                    | :heavy_minus_sign:                                                          | The height of the image                                                     |
| `media`                                                                     | [shared.MediaEnum](../../models/shared/mediaenum.md)                        | :heavy_minus_sign:                                                          | The default image type to use as the sources                                |
| `repeat`                                                                    | *boolean*                                                                   | :heavy_minus_sign:                                                          | Allow repetion of images if there are not enough source images to fill grid |
| `rows`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Number of rows to construct in the composite image                          |
| `width`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | The width of the image                                                      |
# GetMediaMetaDataImage

## Example Usage

```typescript
import { GetMediaMetaDataImage } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataImage = {
  alt: "Better Call Saul",
  type: "coverPoster",
  url: "/library/metadata/44288/thumb/1736487993",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `alt`                                                         | *string*                                                      | :heavy_check_mark:                                            | Alternate text for the image.                                 | Better Call Saul                                              |
| `type`                                                        | *string*                                                      | :heavy_check_mark:                                            | The type of image (e.g., coverPoster, background, clearLogo). | coverPoster                                                   |
| `url`                                                         | *string*                                                      | :heavy_check_mark:                                            | The URL of the image.                                         | /library/metadata/44288/thumb/1736487993                      |
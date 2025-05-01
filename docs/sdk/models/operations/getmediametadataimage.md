# GetMediaMetaDataImage

## Example Usage

```typescript
import { GetMediaMetaDataImage, GetMediaMetaDataLibraryType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataImage = {
  alt: "Episode 1",
  type: GetMediaMetaDataLibraryType.Background,
  url: "/library/metadata/45521/thumb/1644710589",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `alt`                                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | Episode 1                                                                                               |
| `type`                                                                                                  | [operations.GetMediaMetaDataLibraryType](../../../sdk/models/operations/getmediametadatalibrarytype.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     | background                                                                                              |
| `url`                                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | /library/metadata/45521/thumb/1644710589                                                                |
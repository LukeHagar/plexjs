# GetAllMediaLibraryImage

## Example Usage

```typescript
import { GetAllMediaLibraryImage, GetAllMediaLibraryLibraryResponseType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllMediaLibraryImage = {
  alt: "Episode 1",
  type: GetAllMediaLibraryLibraryResponseType.Background,
  url: "/library/metadata/45521/thumb/1644710589",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `alt`                                                                                                                       | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         | Episode 1                                                                                                                   |
| `type`                                                                                                                      | [operations.GetAllMediaLibraryLibraryResponseType](../../../sdk/models/operations/getallmedialibrarylibraryresponsetype.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         | background                                                                                                                  |
| `url`                                                                                                                       | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         | /library/metadata/45521/thumb/1644710589                                                                                    |
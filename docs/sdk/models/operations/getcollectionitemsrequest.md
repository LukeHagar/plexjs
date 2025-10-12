# GetCollectionItemsRequest

## Example Usage

```typescript
import { GetCollectionItemsRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetCollectionItemsRequest = {
  collectionId: 398492,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `accepts`                                                      | [shared.Accepts](../../../sdk/models/shared/accepts.md)        | :heavy_minus_sign:                                             | Indicates the client accepts the indicated media types         |                                                                |
| `clientIdentifier`                                             | *string*                                                       | :heavy_minus_sign:                                             | An opaque identifier unique to the client                      | abc123                                                         |
| `product`                                                      | *string*                                                       | :heavy_minus_sign:                                             | The name of the client product                                 | Plex for Roku                                                  |
| `version`                                                      | *string*                                                       | :heavy_minus_sign:                                             | The version of the client application                          | 2.4.1                                                          |
| `platform`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The platform of the client                                     | Roku                                                           |
| `platformVersion`                                              | *string*                                                       | :heavy_minus_sign:                                             | The version of the platform                                    | 4.3 build 1057                                                 |
| `device`                                                       | *string*                                                       | :heavy_minus_sign:                                             | A relatively friendly name for the client device               | Roku 3                                                         |
| `model`                                                        | *string*                                                       | :heavy_minus_sign:                                             | A potentially less friendly identifier for the device model    | 4200X                                                          |
| `deviceVendor`                                                 | *string*                                                       | :heavy_minus_sign:                                             | The device vendor                                              | Roku                                                           |
| `deviceName`                                                   | *string*                                                       | :heavy_minus_sign:                                             | A friendly name for the client                                 | Living Room TV                                                 |
| `marketplace`                                                  | *string*                                                       | :heavy_minus_sign:                                             | The marketplace on which the client application is distributed | googlePlay                                                     |
| `collectionId`                                                 | *number*                                                       | :heavy_check_mark:                                             | The collection id                                              |                                                                |
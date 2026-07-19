# ListProvidersResponse

A feature supported by a media provider.

## Example Usage

```typescript
import { Key, ListProvidersResponse } from "@parke.dev/plexjs/models/operations";

let value: ListProvidersResponse = {
  title: "string value",
  type: "string value",
  key: Key.Search,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                 | [operations.ListProvidersMediaContainer](../../models/operations/listprovidersmediacontainer.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `title`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Human-readable feature title.                                                                    | Search                                                                                           |
| `type`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Feature type.                                                                                    | content                                                                                          |
| `key`                                                                                            | [operations.Key](../../models/operations/key.md)                                                 | :heavy_minus_sign:                                                                               | Feature key identifier.                                                                          | search                                                                                           |
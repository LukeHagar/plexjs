# GetRefreshLibraryMetadataRequest

## Example Usage

```typescript
import { Force, GetRefreshLibraryMetadataRequest } from "@lukehagar/plexjs";

let value: GetRefreshLibraryMetadataRequest = {
    sectionKey: 9518,
    force: Force.One,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sectionKey`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | The unique key of the Plex library. <br/>Note: This is unique in the context of the Plex server.<br/> | 9518                                                                                          |
| `force`                                                                                       | [models.Force](../models/force.md)                                                            | :heavy_minus_sign:                                                                            | Force the refresh even if the library is already being refreshed.                             | 0                                                                                             |
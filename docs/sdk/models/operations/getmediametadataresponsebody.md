# GetMediaMetaDataResponseBody

The metadata of the library item.

## Example Usage

```typescript
import { GetMediaMetaDataResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataResponseBody = {
  mediaContainer: {
    size: 50,
    allowSync: false,
    identifier: "com.plexapp.plugins.library",
    librarySectionID: 2,
    librarySectionTitle: "TV Series",
    librarySectionUUID: "e69655a2-ef48-4aba-bb19-0cc34d1e7d36",
    mediaTagPrefix: "/system/bundle/media/flags/",
    mediaTagVersion: 1734362201,
    metadata: [],
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                              | [operations.GetMediaMetaDataMediaContainer](../../../sdk/models/operations/getmediametadatamediacontainer.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
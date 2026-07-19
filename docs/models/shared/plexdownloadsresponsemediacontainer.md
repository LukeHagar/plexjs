# PlexDownloadsResponseMediaContainer

## Example Usage

```typescript
import { PlexDownloadsResponseMediaContainer } from "@parke.dev/plexjs/models/shared";

let value: PlexDownloadsResponseMediaContainer = {
  directory: [
    {
      title: "string value",
      type: "string value",
      art: "string value",
      content: true,
      filter: "string value",
      hasPrefs: true,
      hasStoreServices: true,
      hubKey: "string value",
      identifier: "string value",
      key: "string value",
      lastAccessedAt: 1,
      pivot: [
        {
          title: "string value",
          type: "string value",
          context: "string value",
          id: "string value",
          key: "string value",
          symbol: "string value",
        },
      ],
      share: 1,
      thumb: "string value",
      titleBar: "string value",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `directory`                                            | [shared.Directory](../../models/shared/directory.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
| `size`                                                 | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
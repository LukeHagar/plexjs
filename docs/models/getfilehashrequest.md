# GetFileHashRequest

## Example Usage

```typescript
import { GetFileHashRequest } from "@lukehagar/plexjs";

let value: GetFileHashRequest = {
    url: "file://C:Image.png&type=13",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `url`                                                             | *string*                                                          | :heavy_check_mark:                                                | This is the path to the local file, must be prefixed by `file://` | file://C:\Image.png&type=13                                       |
| `type`                                                            | *number*                                                          | :heavy_minus_sign:                                                | Item type                                                         |                                                                   |
# GetGenresLibraryRequest

## Example Usage

```typescript
import { GetGenresLibraryRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGenresLibraryRequest = {
  sectionKey: 9518,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sectionKey`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | The unique key of the Plex library. <br/>Note: This is unique in the context of the Plex server.<br/> | 9518                                                                                          |
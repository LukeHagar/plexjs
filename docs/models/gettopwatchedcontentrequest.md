# GetTopWatchedContentRequest

## Example Usage

```typescript
import { GetTopWatchedContentRequest } from "@lukehagar/plexjs";

let value: GetTopWatchedContentRequest = {
    type: 681820,
    includeGuids: 1,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `type`                                              | *number*                                            | :heavy_check_mark:                                  | the library type (1 - movies, 2 - shows, 3 - music) |                                                     |
| `includeGuids`                                      | *number*                                            | :heavy_minus_sign:                                  | Adds the Guids object to the response<br/>          | 1                                                   |
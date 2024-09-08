# PerformSearchRequest

## Example Usage

```typescript
import { PerformSearchRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: PerformSearchRequest = {
    query: "arnold",
    limit: 5,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `query`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | The query term                                                                        | arnold                                                                                |
| `sectionId`                                                                           | *number*                                                                              | :heavy_minus_sign:                                                                    | This gives context to the search, and can result in re-ordering of search result hubs |                                                                                       |
| `limit`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | The number of items to return per hub                                                 | 5                                                                                     |
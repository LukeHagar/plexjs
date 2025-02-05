# PerformVoiceSearchRequest

## Example Usage

```typescript
import { PerformVoiceSearchRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: PerformVoiceSearchRequest = {
  query: "dead+poop",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `query`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | The query term                                                                        | dead+poop                                                                             |
| `sectionId`                                                                           | *number*                                                                              | :heavy_minus_sign:                                                                    | This gives context to the search, and can result in re-ordering of search result hubs |                                                                                       |
| `limit`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | The number of items to return per hub                                                 | 5                                                                                     |
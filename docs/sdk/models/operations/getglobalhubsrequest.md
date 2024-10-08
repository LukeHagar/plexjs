# GetGlobalHubsRequest

## Example Usage

```typescript
import { GetGlobalHubsRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGlobalHubsRequest = {};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                               | *number*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The number of items to return with each hub.                                                                                                          |
| `onlyTransient`                                                                                                                                       | [operations.OnlyTransient](../../../sdk/models/operations/onlytransient.md)                                                                           | :heavy_minus_sign:                                                                                                                                    | Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added). |
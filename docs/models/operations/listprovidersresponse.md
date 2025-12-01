# ListProvidersResponse

OK

## Example Usage

```typescript
import { ListProvidersResponse } from "@lukehagar/plexjs/models/operations";

let value: ListProvidersResponse = {
  mediaContainer: {
    livetv: 7,
    machineIdentifier: "0123456789abcdef0123456789abcdef012345678",
    musicAnalysis: 2,
    myPlexMappingState: "mapped",
    myPlexSigninState: "ok",
    offlineTranscode: 1,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                 | [operations.ListProvidersMediaContainer](../../models/operations/listprovidersmediacontainer.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
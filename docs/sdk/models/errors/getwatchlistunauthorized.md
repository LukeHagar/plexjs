# GetWatchListUnauthorized

Unauthorized - Returned if the X-Plex-Token is missing from the header or query.

## Example Usage

```typescript
import { GetWatchListUnauthorized } from "@lukehagar/plexjs/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `errors`                                                                                          | [errors.GetWatchListWatchlistErrors](../../../sdk/models/errors/getwatchlistwatchlisterrors.md)[] | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_minus_sign:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
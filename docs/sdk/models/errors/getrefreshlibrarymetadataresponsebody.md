# GetRefreshLibraryMetadataResponseBody

Unauthorized - Returned if the X-Plex-Token is missing from the header or query.

## Example Usage

```typescript
import { GetRefreshLibraryMetadataResponseBody } from "@lukehagar/plexjs/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                  | [errors.GetRefreshLibraryMetadataErrors](../../../sdk/models/errors/getrefreshlibrarymetadataerrors.md)[] | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_minus_sign:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
# GetPinResponseBody

Bad Request response when the X-Plex-Client-Identifier is missing

## Example Usage

```typescript
import { GetPinResponseBody } from "@lukehagar/plexjs/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `errors`                                                              | [errors.GetPinErrors](../../../sdk/models/errors/getpinerrors.md)[]   | :heavy_minus_sign:                                                    | N/A                                                                   |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_minus_sign:                                                    | Raw HTTP response; suitable for custom response parsing               |
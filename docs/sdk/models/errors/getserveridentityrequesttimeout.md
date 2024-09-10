# GetServerIdentityRequestTimeout

Request Timeout

## Example Usage

```typescript
import { GetServerIdentityRequestTimeout } from "@lukehagar/plexjs/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `code`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | 408                                                                   |
| `message`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | The server timed out waiting for the request.                         |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_minus_sign:                                                    | Raw HTTP response; suitable for custom response parsing               |                                                                       |
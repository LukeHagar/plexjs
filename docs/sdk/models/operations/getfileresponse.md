# GetFileResponse

## Example Usage

```typescript
import { GetFileResponse } from "@lukehagar/plexjs/sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `twoHundredAudioMpeg3ResponseStream`                                  | *ReadableStream<Uint8Array>*                                          | :heavy_minus_sign:                                                    | OK                                                                    |
| `twoHundredImageJpegResponseStream`                                   | *ReadableStream<Uint8Array>*                                          | :heavy_minus_sign:                                                    | OK                                                                    |
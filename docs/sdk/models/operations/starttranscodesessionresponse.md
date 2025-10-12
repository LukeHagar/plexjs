# StartTranscodeSessionResponse

## Example Usage

```typescript
import { StartTranscodeSessionResponse } from "@lukehagar/plexjs/sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `contentType`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | HTTP response content type for this operation                                        |
| `statusCode`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | HTTP response status code for this operation                                         |
| `rawResponse`                                                                        | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                | :heavy_check_mark:                                                                   | Raw HTTP response; suitable for custom response parsing                              |
| `responseStream`                                                                     | *ReadableStream<Uint8Array>*                                                         | :heavy_minus_sign:                                                                   | MPD file (see ISO/IEC 23009-1:2022), m3u8 file (see RFC 8216), or binary http stream |
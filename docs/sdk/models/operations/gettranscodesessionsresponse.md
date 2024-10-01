# GetTranscodeSessionsResponse

## Example Usage

```typescript
import { GetTranscodeSessionsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTranscodeSessionsResponse = {
  contentType: "<value>",
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 1,
      transcodeSession: [
        {
          key: "vv3i2q2lax92qlzul1hbd4bx",
          throttled: false,
          complete: false,
          progress: 1.7999999523162842,
          size: -22,
          speed: 25.100000381469727,
          error: false,
          duration: 1445695,
          remaining: 53,
          context: "streaming",
          sourceVideoCodec: "h264",
          sourceAudioCodec: "aac",
          videoDecision: "transcode",
          audioDecision: "transcode",
          subtitleDecision: "burn",
          protocol: "http",
          container: "mkv",
          videoCodec: "h264",
          audioCodec: "opus",
          audioChannels: 1,
          transcodeHwRequested: true,
          timeStamp: 1705895805.4919229,
          maxOffsetAvailable: 29.53,
          minOffsetAvailable: 3.003000020980835,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `object`                                                                                                          | [operations.GetTranscodeSessionsResponseBody](../../../sdk/models/operations/gettranscodesessionsresponsebody.md) | :heavy_minus_sign:                                                                                                | The Transcode Sessions                                                                                            |
# GetMyPlexAccountResponse

## Example Usage

```typescript
import { GetMyPlexAccountResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMyPlexAccountResponse = {
  contentType: "<value>",
  statusCode: 415,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    myPlex: {
      authToken: "Z5v-PrNASDFpsaCi3CPK7",
      username: "example.email@mail.com",
      mappingState: "mapped",
      signInState: "ok",
      publicAddress: "140.20.68.140",
      publicPort: 32400,
      privateAddress: "10.10.10.47",
      privatePort: 32400,
      subscriptionFeatures:
        "federated-auth,hardware_transcoding,home,hwtranscode,item_clusters,kevin-bacon,livetv,loudness,lyrics,music-analysis,music_videos,pass,photo_autotags,photos-v5,photosV6-edit,photosV6-tv-albums,premium_music_metadata,radio,server-manager,session_bandwidth_restrictions,session_kick,shared-radio,sync,trailers,tuner-sharing,type-first,unsupportedtuners,webhooks",
      subscriptionState: "Active",
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.GetMyPlexAccountResponseBody](../../../sdk/models/operations/getmyplexaccountresponsebody.md) | :heavy_minus_sign:                                                                                        | MyPlex Account                                                                                            |
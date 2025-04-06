# GetTokenDetailsResponse

## Example Usage

```typescript
import {
  GetTokenDetailsAuthenticationResponseStatus,
  GetTokenDetailsAuthenticationStatus,
  GetTokenDetailsResponse,
  GetTokenDetailsStatus,
  MailingListStatus,
} from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTokenDetailsResponse = {
  contentType: "<value>",
  statusCode: 200,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  userPlexAccount: {
    adsConsent: false,
    adsConsentReminderAt: 1556281940,
    adsConsentSetAt: 1556281940,
    authToken: "CxoUzBTSV5hsxjTpFKaf",
    country: "US",
    email: "username@email.com",
    friendlyName: "friendlyUsername",
    entitlements: [
      "[]",
    ],
    homeSize: 1,
    id: 13692262,
    joinedAt: 1556281940,
    locale: "nl",
    mailingListStatus: MailingListStatus.Active,
    maxHomeSize: 15,
    profile: {
      defaultAudioLanguage: "ja",
      defaultSubtitleLanguage: "en",
    },
    rememberExpiresAt: 1556281940,
    scrobbleTypes: "<value>",
    services: [
      {
        identifier: "metadata-dev",
        endpoint: "https://epg.provider.plex.tv",
        token: "DjoMtqFAGRL1uVtCyF1dKIorTbShJeqv",
        secret: "<value>",
        status: GetTokenDetailsStatus.Online,
      },
    ],
    subscription: {
      active: true,
      subscribedAt: "2021-04-12T18:21:12Z",
      status: GetTokenDetailsAuthenticationStatus.Inactive,
    },
    subscriptionDescription: "<value>",
    subscriptions: [
      {
        active: true,
        subscribedAt: "2021-04-12T18:21:12Z",
        status: GetTokenDetailsAuthenticationResponseStatus.Inactive,
      },
    ],
    thumb: "https://plex.tv/users/a4f43c1ebfde43a5/avatar?c=8372075101",
    title: "UsernameTitle",
    username: "Username",
    uuid: "dae343c1f45beb4f",
    attributionPartner: null,
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `userPlexAccount`                                                                                             | [operations.GetTokenDetailsUserPlexAccount](../../../sdk/models/operations/gettokendetailsuserplexaccount.md) | :heavy_minus_sign:                                                                                            | Logged in user details                                                                                        |
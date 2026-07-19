# WebhookPayload

Payload delivered by Plex to configured webhook URLs.

## Example Usage

```typescript
import { Event, WebhookPayload } from "@parke.dev/plexjs/models/shared";

let value: WebhookPayload = {
  account: {
    title: "string value",
    id: 1,
    thumb: "string value",
  },
  event: Event.MediaPlay,
  metadata: {},
  owner: true,
  player: {
    title: "string value",
    local: true,
    publicAddress: "string value",
    uuid: "string value",
  },
  server: {
    title: "string value",
    uuid: "string value",
  },
  user: true,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `account`                                                                      | [shared.Account](../../models/shared/account.md)                               | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `event`                                                                        | [shared.Event](../../models/shared/event.md)                                   | :heavy_minus_sign:                                                             | Event type that triggered the webhook.                                         | media.play                                                                     |
| `metadata`                                                                     | [shared.WebhookPayloadMetadata](../../models/shared/webhookpayloadmetadata.md) | :heavy_minus_sign:                                                             | The media item associated with the event. Shape varies by event type.          |                                                                                |
| `owner`                                                                        | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | true                                                                           |
| `player`                                                                       | [shared.WebhookPayloadPlayer](../../models/shared/webhookpayloadplayer.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `server`                                                                       | [shared.Server](../../models/shared/server.md)                                 | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `user`                                                                         | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | true                                                                           |
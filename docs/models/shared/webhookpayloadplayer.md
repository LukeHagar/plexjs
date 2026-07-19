# WebhookPayloadPlayer

## Example Usage

```typescript
import { WebhookPayloadPlayer } from "@parke.dev/plexjs/models/shared";

let value: WebhookPayloadPlayer = {
  title: "Chrome",
  local: true,
  publicAddress: "192.168.1.100",
  uuid: "player-uuid-123",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `title`            | *string*           | :heavy_minus_sign: | N/A                | Chrome             |
| `local`            | *boolean*          | :heavy_minus_sign: | N/A                | true               |
| `publicAddress`    | *string*           | :heavy_minus_sign: | N/A                | 192.168.1.100      |
| `uuid`             | *string*           | :heavy_minus_sign: | N/A                | player-uuid-123    |
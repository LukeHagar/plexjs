# Subscription1

If the account's Plex Pass subscription is active

## Example Usage

```typescript
import { Subscription1, SubscriptionStatus1 } from "@parke.dev/plexjs/models/shared";

let value: Subscription1 = {
  active: true,
  status: SubscriptionStatus1.Inactive,
  subscribedAt: "2021-04-12T18:21:12Z",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `active`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | If the account's Plex Pass subscription is active                        | true                                                                     |
| `features`                                                               | *string*[]                                                               | :heavy_minus_sign:                                                       | List of features allowed on your Plex Pass subscription                  |                                                                          |
| `paymentService`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | Payment service used for your Plex Pass subscription                     |                                                                          |
| `plan`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Name of Plex Pass subscription plan                                      |                                                                          |
| `status`                                                                 | [shared.SubscriptionStatus1](../../models/shared/subscriptionstatus1.md) | :heavy_minus_sign:                                                       | String representation of subscriptionActive                              | Inactive                                                                 |
| `subscribedAt`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | Date the account subscribed to Plex Pass                                 | 2021-04-12T18:21:12Z                                                     |
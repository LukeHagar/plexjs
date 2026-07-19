# Subscription2

## Example Usage

```typescript
import { Subscription2, SubscriptionStatus2 } from "@parke.dev/plexjs/models/operations";

let value: Subscription2 = {
  active: true,
  status: SubscriptionStatus2.Inactive,
  subscribedAt: "2021-04-12T18:21:12Z",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `active`                                                                         | *boolean*                                                                        | :heavy_minus_sign:                                                               | If the account's Plex Pass subscription is active                                | true                                                                             |
| `features`                                                                       | *string*[]                                                                       | :heavy_minus_sign:                                                               | List of features allowed on your Plex Pass subscription                          |                                                                                  |
| `paymentService`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | Payment service used for your Plex Pass subscription                             |                                                                                  |
| `plan`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | Name of Plex Pass subscription plan                                              |                                                                                  |
| `status`                                                                         | [operations.SubscriptionStatus2](../../models/operations/subscriptionstatus2.md) | :heavy_minus_sign:                                                               | String representation of subscriptionActive                                      | Inactive                                                                         |
| `subscribedAt`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | Date the account subscribed to Plex Pass                                         | 2021-04-12T18:21:12Z                                                             |
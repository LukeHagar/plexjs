# Subscription2

## Example Usage

```typescript
import { Subscription2, SubscriptionStatus2 } from "@lukehagar/plexjs/models/operations";

let value: Subscription2 = {
  active: true,
  subscribedAt: "2021-04-12T18:21:12Z",
  status: SubscriptionStatus2.Inactive,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `features`                                                                       | *string*[]                                                                       | :heavy_minus_sign:                                                               | List of features allowed on your Plex Pass subscription                          |                                                                                  |
| `active`                                                                         | *boolean*                                                                        | :heavy_minus_sign:                                                               | If the account's Plex Pass subscription is active                                | true                                                                             |
| `subscribedAt`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | Date the account subscribed to Plex Pass                                         | 2021-04-12T18:21:12Z                                                             |
| `status`                                                                         | [operations.SubscriptionStatus2](../../models/operations/subscriptionstatus2.md) | :heavy_minus_sign:                                                               | String representation of subscriptionActive                                      | Inactive                                                                         |
| `paymentService`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | Payment service used for your Plex Pass subscription                             |                                                                                  |
| `plan`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | Name of Plex Pass subscription plan                                              |                                                                                  |
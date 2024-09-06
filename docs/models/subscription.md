# Subscription

If the account’s Plex Pass subscription is active

## Example Usage

```typescript
import { GetUserDetailsAuthenticationStatus, Subscription } from "@lukehagar/plexjs";

let value: Subscription = {
    active: true,
    subscribedAt: "2021-04-12T18:21:12Z",
    status: GetUserDetailsAuthenticationStatus.Inactive,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `features`                                                                                   | [models.Features](../models/features.md)[]                                                   | :heavy_minus_sign:                                                                           | List of features allowed on your Plex Pass subscription                                      |                                                                                              |
| `active`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If the account's Plex Pass subscription is active                                            | true                                                                                         |
| `subscribedAt`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | Date the account subscribed to Plex Pass                                                     | 2021-04-12T18:21:12Z                                                                         |
| `status`                                                                                     | [models.GetUserDetailsAuthenticationStatus](../models/getuserdetailsauthenticationstatus.md) | :heavy_minus_sign:                                                                           | String representation of subscriptionActive                                                  | Inactive                                                                                     |
| `paymentService`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | Payment service used for your Plex Pass subscription                                         |                                                                                              |
| `plan`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | Name of Plex Pass subscription plan                                                          |                                                                                              |
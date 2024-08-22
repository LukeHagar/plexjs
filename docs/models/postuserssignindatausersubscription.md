# PostUsersSigninDataUserSubscription

## Example Usage

```typescript
import { PostUsersSigninDataUserResponseStatus, PostUsersSigninDataUserSubscription } from "@lukehagar/plexjs";

let value: PostUsersSigninDataUserSubscription = {
    active: true,
    subscribedAt: new Date("2021-04-12T18:21:12Z"),
    status: PostUsersSigninDataUserResponseStatus.Inactive,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `features`                                                                                         | [models.PostUsersSigninDataUserFeatures](../models/postuserssignindatauserfeatures.md)[]           | :heavy_minus_sign:                                                                                 | List of features allowed on your Plex Pass subscription                                            |                                                                                                    |
| `active`                                                                                           | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | If the account's Plex Pass subscription is active                                                  | true                                                                                               |
| `subscribedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Date the account subscribed to Plex Pass                                                           | 2021-04-12T18:21:12Z                                                                               |
| `status`                                                                                           | [models.PostUsersSigninDataUserResponseStatus](../models/postuserssignindatauserresponsestatus.md) | :heavy_minus_sign:                                                                                 | String representation of subscriptionActive                                                        | Inactive                                                                                           |
| `paymentService`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Payment service used for your Plex Pass subscription                                               |                                                                                                    |
| `plan`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Name of Plex Pass subscription plan                                                                |                                                                                                    |
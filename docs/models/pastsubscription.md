# PastSubscription

## Example Usage

```typescript
import { PastSubscription, PostUsersSigninDataState } from "@lukehagar/plexjs";

let value: PastSubscription = {
    id: "<id>",
    mode: "<value>",
    renewsAt: 662527,
    endsAt: 1556281940,
    canceled: false,
    gracePeriod: false,
    onHold: false,
    canReactivate: false,
    canUpgrade: false,
    canDowngrade: false,
    canConvert: false,
    type: "plexpass",
    transfer: "<value>",
    state: PostUsersSigninDataState.Ended,
    billing: [
        {
            internalPaymentMethod: {},
            paymentMethodId: 820994,
        },
    ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `mode`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `renewsAt`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | Unix epoch datetime                                                      |                                                                          |
| `endsAt`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | Unix epoch datetime                                                      | 1556281940                                                               |
| `canceled`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `gracePeriod`                                                            | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `onHold`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `canReactivate`                                                          | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `canUpgrade`                                                             | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `canDowngrade`                                                           | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `canConvert`                                                             | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      | plexpass                                                                 |
| `transfer`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `state`                                                                  | [models.PostUsersSigninDataState](../models/postuserssignindatastate.md) | :heavy_check_mark:                                                       | N/A                                                                      | ended                                                                    |
| `billing`                                                                | [models.Billing](../models/billing.md)[]                                 | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
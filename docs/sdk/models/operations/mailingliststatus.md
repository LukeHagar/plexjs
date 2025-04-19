# MailingListStatus

Your current mailing list status (active or unsubscribed)

## Example Usage

```typescript
import { MailingListStatus } from "@lukehagar/plexjs/sdk/models/operations";

let value: MailingListStatus = MailingListStatus.Active;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Active`               | active                 |
| `Unsubscribed`         | unsubscribed           |
| -                      | `Unrecognized<string>` |
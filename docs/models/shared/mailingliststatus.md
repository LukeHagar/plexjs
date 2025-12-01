# MailingListStatus

Your current mailing list status

## Example Usage

```typescript
import { MailingListStatus } from "@lukehagar/plexjs/models/shared";

let value: MailingListStatus = MailingListStatus.Active;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Active`               | active                 |
| `Unsubscribed`         | unsubscribed           |
| `Removed`              | removed                |
| -                      | `Unrecognized<string>` |
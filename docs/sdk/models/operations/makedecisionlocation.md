# MakeDecisionLocation

Network type of the client, can be used to help determine target bitrate.

## Example Usage

```typescript
import { MakeDecisionLocation } from "@lukehagar/plexjs/sdk/models/operations";

let value: MakeDecisionLocation = MakeDecisionLocation.Wan;
```

## Values

| Name       | Value      |
| ---------- | ---------- |
| `Lan`      | lan        |
| `Wan`      | wan        |
| `Cellular` | cellular   |
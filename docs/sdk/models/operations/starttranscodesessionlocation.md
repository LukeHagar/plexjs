# StartTranscodeSessionLocation

Network type of the client, can be used to help determine target bitrate.

## Example Usage

```typescript
import { StartTranscodeSessionLocation } from "@lukehagar/plexjs/sdk/models/operations";

let value: StartTranscodeSessionLocation = StartTranscodeSessionLocation.Wan;
```

## Values

| Name       | Value      |
| ---------- | ---------- |
| `Lan`      | lan        |
| `Wan`      | wan        |
| `Cellular` | cellular   |
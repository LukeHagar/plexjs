# Session

Information about the playback session

## Example Usage

```typescript
import { Session } from "@lukehagar/plexjs/sdk/models/shared";

let value: Session = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `bandwidth`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | The bandwidth used by this client's playback in kbps                    |
| `id`                                                                    | *string*                                                                | :heavy_minus_sign:                                                      | The id of the playback session                                          |
| `location`                                                              | [shared.SessionLocation](../../../sdk/models/shared/sessionlocation.md) | :heavy_minus_sign:                                                      | The location of the client                                              |
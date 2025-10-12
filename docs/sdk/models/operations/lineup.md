# Lineup

## Example Usage

```typescript
import { Lineup } from "@lukehagar/plexjs/sdk/models/operations";

let value: Lineup = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `title`                                                                                   | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `type`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | The type of this object (`lineup` in this case)                                           |
| `lineupType`                                                                              | [operations.LineupType](../../../sdk/models/operations/lineuptype.md)                     | :heavy_minus_sign:                                                                        | - `-1`: N/A<br/>- `0`: Over the air<br/>- `1`: Cable<br/>- `2`: Satellite<br/>- `3`: IPTV<br/>- `4`: Virtual<br/> |
| `location`                                                                                | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `uuid`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | The uuid of this lineup                                                                   |
| `channel`                                                                                 | [shared.Channel](../../../sdk/models/shared/channel.md)[]                                 | :heavy_minus_sign:                                                                        | N/A                                                                                       |
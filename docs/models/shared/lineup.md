# Lineup

## Example Usage

```typescript
import { Lineup, LineupType } from "@parke.dev/plexjs/models/shared";

let value: Lineup = {
  title: "string value",
  type: "string value",
  identifier: "string value",
  key: "string value",
  lineupType: LineupType.One,
  location: "string value",
  uuid: "string value",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `title`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `type`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The type of this object (`lineup` in this case)                                          |                                                                                          |
| `identifier`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | Lineup identifier.                                                                       | OTA                                                                                      |
| `key`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | API key for this lineup.                                                                 | /tv.plex.lineup.ota                                                                      |
| `lineupType`                                                                             | [shared.LineupType](../../models/shared/lineuptype.md)                                   | :heavy_minus_sign:                                                                       | - `-1`: N/A<br/>- `0`: Over the air<br/>- `1`: Cable<br/>- `2`: Satellite<br/>- `3`: IPTV<br/>- `4`: Virtual |                                                                                          |
| `location`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The uuid of this lineup                                                                  |                                                                                          |
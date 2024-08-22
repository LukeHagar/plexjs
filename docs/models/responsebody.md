# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@lukehagar/plexjs";

let value: ResponseBody = {
    identifier: "tv.plex.sonos",
    baseURL: "https://sonos.plex.tv",
    title: "Sonos",
    linkURL: "https://sonos.plex.tv/link",
    provides: "client,player",
    token: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `identifier`                             | *string*                                 | :heavy_check_mark:                       | N/A                                      | tv.plex.sonos                            |
| `baseURL`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      | https://sonos.plex.tv                    |
| `title`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      | Sonos                                    |
| `linkURL`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      | https://sonos.plex.tv/link               |
| `provides`                               | *string*                                 | :heavy_check_mark:                       | N/A                                      | client,player                            |
| `token`                                  | *string*                                 | :heavy_check_mark:                       | The plex authtoken used to identify with |                                          |
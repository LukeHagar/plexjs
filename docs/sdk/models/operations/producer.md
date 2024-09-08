# Producer

## Example Usage

```typescript
import { Producer } from "@lukehagar/plexjs/sdk/models/operations";

let value: Producer = {
    id: 221,
    filter: "producer=221",
    tag: "Barry Mendel",
    tagKey: "5d776826961905001eb90e2b",
    thumb: "https://metadata-static.plex.tv/8/people/87877371326a964634d18556d94547e1.jpg",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           | 221                                                                           |
| `filter`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           | producer=221                                                                  |
| `tag`                                                                         | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           | Barry Mendel                                                                  |
| `tagKey`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           | 5d776826961905001eb90e2b                                                      |
| `thumb`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           | https://metadata-static.plex.tv/8/people/87877371326a964634d18556d94547e1.jpg |
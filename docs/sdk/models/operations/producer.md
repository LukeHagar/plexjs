# Producer

## Example Usage

```typescript
import { Producer } from "@lukehagar/plexjs/sdk/models/operations";

let value: Producer = {
  id: 126522,
  filter: "producer=126522",
  tag: "Amelia Knapp",
  tagKey: "5d77683d85719b001f3a535e",
  thumb:
    "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Unique identifier for the producer.                                                                          | 126522                                                                                                       |
| `filter`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The filter string used to query this producer.                                                               | producer=126522                                                                                              |
| `tag`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the producer                                                                                     | Amelia Knapp                                                                                                 |
| `tagKey`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | A 24-character hexadecimal unique key associated with the producer's tag, used for internal identification.<br/> | 5d77683d85719b001f3a535e                                                                                     |
| `thumb`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The absolute URL of the thumbnail image for the producer.                                                    | https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg                                |
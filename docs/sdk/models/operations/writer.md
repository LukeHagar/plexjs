# Writer

## Example Usage

```typescript
import { Writer } from "@lukehagar/plexjs/sdk/models/operations";

let value: Writer = {
  id: 126522,
  filter: "writer=126522",
  tag: "Jamie P. Hanson",
  tagKey: "5d77683d85719b001f3a535e",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *number*                                                                        | :heavy_check_mark:                                                              | Unique identifier for the writer.                                               | 126522                                                                          |
| `filter`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | The filter string used to query this writer.                                    | writer=126522                                                                   |
| `tag`                                                                           | *string*                                                                        | :heavy_check_mark:                                                              | The role of Writer                                                              | Jamie P. Hanson                                                                 |
| `tagKey`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | A unique key associated with the writers tag, used for internal identification. | 5d77683d85719b001f3a535e                                                        |
# Similar

The display tag for the similar item, typically the title.

## Example Usage

```typescript
import { Similar } from "@lukehagar/plexjs/sdk/models/operations";

let value: Similar = {
  id: 259,
  filter: "similar=259",
  tag: "Criss Angel Mindfreak",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *number*              | :heavy_check_mark:    | N/A                   | 259                   |
| `filter`              | *string*              | :heavy_check_mark:    | N/A                   | similar=259           |
| `tag`                 | *string*              | :heavy_check_mark:    | N/A                   | Criss Angel Mindfreak |
# GetLibraryItemsField

## Example Usage

```typescript
import { GetLibraryItemsField } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsField = {
  key: "show.title",
  title: "Show Title",
  type: "string",
  subType: "rating",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `key`              | *string*           | :heavy_check_mark: | N/A                | show.title         |
| `title`            | *string*           | :heavy_check_mark: | N/A                | Show Title         |
| `type`             | *string*           | :heavy_check_mark: | N/A                | string             |
| `subType`          | *string*           | :heavy_minus_sign: | N/A                | rating             |
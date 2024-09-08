# Device

## Example Usage

```typescript
import { Device } from "@lukehagar/plexjs/sdk/models/operations";

let value: Device = {
    id: 1,
    name: "iPhone",
    platform: "iOS",
    createdAt: 1654131230,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_minus_sign: | N/A                | 1                  |
| `name`             | *string*           | :heavy_minus_sign: | N/A                | iPhone             |
| `platform`         | *string*           | :heavy_minus_sign: | N/A                | iOS                |
| `clientIdentifier` | *string*           | :heavy_minus_sign: | N/A                |                    |
| `createdAt`        | *number*           | :heavy_minus_sign: | N/A                | 1654131230         |
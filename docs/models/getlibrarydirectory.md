# GetLibraryDirectory

## Example Usage

```typescript
import { GetLibraryDirectory } from "@lukehagar/plexjs";

let value: GetLibraryDirectory = {
    key: "search?type=1",
    title: "Search...",
    secondary: true,
    prompt: "Search Movies",
    search: true,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `key`              | *string*           | :heavy_minus_sign: | N/A                | search?type=1      |
| `title`            | *string*           | :heavy_minus_sign: | N/A                | Search...          |
| `secondary`        | *boolean*          | :heavy_minus_sign: | N/A                | true               |
| `prompt`           | *string*           | :heavy_minus_sign: | N/A                | Search Movies      |
| `search`           | *boolean*          | :heavy_minus_sign: | N/A                | true               |
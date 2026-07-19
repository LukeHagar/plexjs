# Provider

A media provider registered with the PMS.

## Example Usage

```typescript
import { Provider } from "@parke.dev/plexjs/models/shared";

let value: Provider = {
  title: "string value",
  identifier: "string value",
  protocol: "string value",
  types: "string value",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `title`                                | *string*                               | :heavy_minus_sign:                     | Human-readable provider title.         | Plex VOD                               |
| `identifier`                           | *string*                               | :heavy_minus_sign:                     | Unique provider identifier.            | tv.plex.provider.vod                   |
| `protocol`                             | *string*                               | :heavy_minus_sign:                     | Protocol version used by the provider. | 1.0                                    |
| `types`                                | *string*                               | :heavy_minus_sign:                     | Content types provided.                | movie,show                             |
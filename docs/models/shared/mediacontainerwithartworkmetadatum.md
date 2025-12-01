# MediaContainerWithArtworkMetadatum

## Example Usage

```typescript
import { MediaContainerWithArtworkMetadatum } from "@lukehagar/plexjs/models/shared";

let value: MediaContainerWithArtworkMetadatum = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `title`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | The title of the item                                                                        |
| `type`                                                                                       | [shared.MediaContainerWithArtworkType](../../models/shared/mediacontainerwithartworktype.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `key`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | The path to the artwork                                                                      |
| `additionalProperties`                                                                       | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
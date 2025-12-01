# ImageType

Describes both the purpose and intended presentation of the image.

## Example Usage

```typescript
import { ImageType } from "@lukehagar/plexjs/models/shared";

let value: ImageType = ImageType.ClearLogo;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Background`           | background             |
| `Banner`               | banner                 |
| `ClearLogo`            | clearLogo              |
| `CoverPoster`          | coverPoster            |
| `Snapshot`             | snapshot               |
| -                      | `Unrecognized<string>` |
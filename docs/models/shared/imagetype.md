# ImageType

Describes both the purpose and intended presentation of the image.

## Example Usage

```typescript
import { ImageType } from "@parke.dev/plexjs/models/shared";

let value: ImageType = ImageType.ClearLogo;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Background`           | background             |
| `BackgroundSquare`     | backgroundSquare       |
| `Banner`               | banner                 |
| `ClearLogo`            | clearLogo              |
| `CoverPoster`          | coverPoster            |
| `Snapshot`             | snapshot               |
| -                      | `Unrecognized<string>` |
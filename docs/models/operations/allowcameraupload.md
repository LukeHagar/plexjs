# AllowCameraUpload

Indicates if the user is allowed to upload from a camera.

## Example Usage

```typescript
import { AllowCameraUpload } from "@lukehagar/plexjs/models/operations";

let value: AllowCameraUpload = AllowCameraUpload.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |
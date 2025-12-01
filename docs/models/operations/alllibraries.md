# AllLibraries

Indicates if the user has access to all libraries.

## Example Usage

```typescript
import { AllLibraries } from "@lukehagar/plexjs/models/operations";

let value: AllLibraries = AllLibraries.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |
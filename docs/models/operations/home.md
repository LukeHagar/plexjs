# Home

Indicates if the user is part of a home group.

## Example Usage

```typescript
import { Home } from "@lukehagar/plexjs/models/operations";

let value: Home = Home.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |
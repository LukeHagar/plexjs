# Flavor

- `0`: The country is divided into regions, and following the key will lead to a list of regions.
- `1`: The county is divided by postal codes, and an example code is returned in `example`.
- `2`: The country has a single postal code, returned in `example`.


## Example Usage

```typescript
import { Flavor } from "@lukehagar/plexjs/models/operations";

let value: Flavor = Flavor.Two;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Zero`                 | 0                      |
| `One`                  | 1                      |
| `Two`                  | 2                      |
| -                      | `Unrecognized<number>` |
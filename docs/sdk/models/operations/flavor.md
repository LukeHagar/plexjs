# Flavor

- `0`: The country is divided into regions, and following the key will lead to a list of regions.
- `1`: The county is divided by postal codes, and an example code is returned in `example`.
- `2`: The country has a single postal code, returned in `example`.


## Example Usage

```typescript
import { Flavor } from "@lukehagar/plexjs/sdk/models/operations";

let value: Flavor = Flavor.Two;
```

## Values

| Name   | Value  |
| ------ | ------ |
| `Zero` | 0      |
| `One`  | 1      |
| `Two`  | 2      |
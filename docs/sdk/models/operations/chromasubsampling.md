# ChromaSubsampling

Use the specified chroma subsambling.
  - 0: 411
  - 1: 420
  - 2: 422
  - 3: 444
Defaults to 3 (444)

## Example Usage

```typescript
import { ChromaSubsampling } from "@lukehagar/plexjs/sdk/models/operations";

let value: ChromaSubsampling = ChromaSubsampling.Two;
```

## Values

| Name    | Value   |
| ------- | ------- |
| `Zero`  | 0       |
| `One`   | 1       |
| `Two`   | 2       |
| `Three` | 3       |
# EnableCreditsMarkerGeneration

Setting that indicates if credits markers detection is enabled. (-1 = Library default, 0 = Disabled).

## Example Usage

```typescript
import { EnableCreditsMarkerGeneration } from "@lukehagar/plexjs/sdk/models/operations";

let value: EnableCreditsMarkerGeneration =
  EnableCreditsMarkerGeneration.LibraryDefault;
```

## Values

| Name             | Value            |
| ---------------- | ---------------- |
| `LibraryDefault` | -1               |
| `Disabled`       | 0                |
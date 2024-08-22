# QueryParamOnlyTransient

Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).

## Example Usage

```typescript
import { QueryParamOnlyTransient } from "@lukehagar/plexjs";

let value: QueryParamOnlyTransient = QueryParamOnlyTransient.One;
```

## Values

| Name   | Value  |
| ------ | ------ |
| `Zero` | 0      |
| `One`  | 1      |
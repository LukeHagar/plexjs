# OnlyTransient

Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).

## Example Usage

```typescript
import { OnlyTransient } from "@lukehagar/plexjs/sdk/models/operations";

let value: OnlyTransient = OnlyTransient.Zero;
```

## Values

| Name   | Value  |
| ------ | ------ |
| `Zero` | 0      |
| `One`  | 1      |
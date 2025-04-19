# SearchTypes

## Example Usage

```typescript
import { SearchTypes } from "@lukehagar/plexjs/sdk/models/operations";

let value: SearchTypes = SearchTypes.Tv;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Movies`               | movies                 |
| `Music`                | music                  |
| `OtherVideos`          | otherVideos            |
| `People`               | people                 |
| `Tv`                   | tv                     |
| -                      | `Unrecognized<string>` |
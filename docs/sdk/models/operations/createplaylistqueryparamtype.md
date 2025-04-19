# CreatePlaylistQueryParamType

type of playlist to create

## Example Usage

```typescript
import { CreatePlaylistQueryParamType } from "@lukehagar/plexjs/sdk/models/operations";

let value: CreatePlaylistQueryParamType = CreatePlaylistQueryParamType.Photo;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Audio`                | audio                  |
| `Video`                | video                  |
| `Photo`                | photo                  |
| -                      | `Unrecognized<string>` |
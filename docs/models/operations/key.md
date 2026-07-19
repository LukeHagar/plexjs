# Key

Feature key identifier.

## Example Usage

```typescript
import { Key } from "@parke.dev/plexjs/models/operations";

let value: Key = Key.Search;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Search`               | search                 |
| `Metadata`             | metadata               |
| `Content`              | content                |
| `Match`                | match                  |
| `Manage`               | manage                 |
| `Timeline`             | timeline               |
| `Rate`                 | rate                   |
| `Playqueue`            | playqueue              |
| `Playlist`             | playlist               |
| `Subscribe`            | subscribe              |
| `Promoted`             | promoted               |
| `Continuewatching`     | continuewatching       |
| `Collection`           | collection             |
| `Actions`              | actions                |
| `Imagetranscoder`      | imagetranscoder        |
| `QueryParser`          | queryParser            |
| `Grid`                 | grid                   |
| -                      | `Unrecognized<string>` |
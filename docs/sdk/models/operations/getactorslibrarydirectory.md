# GetActorsLibraryDirectory

## Example Usage

```typescript
import { GetActorsLibraryDirectory } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetActorsLibraryDirectory = {
  fastKey: "/library/sections/2/all?actor=134671",
  thumb:
    "https://metadata-static.plex.tv/e/people/e2a915b537ef720252b6d408bc1f91b3.jpg",
  key: "134671",
  title: "Aaron Paul",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `fastKey`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | A fast lookup key for the actor relative url.                                 | /library/sections/2/all?actor=134671                                          |
| `thumb`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | URL for the thumbnail image of the actor.                                     | https://metadata-static.plex.tv/e/people/e2a915b537ef720252b6d408bc1f91b3.jpg |
| `key`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | A unique key representing the actor.                                          | 134671                                                                        |
| `title`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | The name of the actor.                                                        | Aaron Paul                                                                    |
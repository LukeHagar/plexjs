# GetPersonResponseBody

OK

## Example Usage

```typescript
import { GetPersonResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetPersonResponseBody = {
  mediaContainer: {
    directory: [
      {
        filter: "actor=49",
        role: "Secretary",
        tag: "Shaun Lawton",
        tagKey: "5d3ee12c4cde6a001c3e0b27",
        thumb:
          "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
      },
    ],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                | [operations.GetPersonMediaContainer](../../../sdk/models/operations/getpersonmediacontainer.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
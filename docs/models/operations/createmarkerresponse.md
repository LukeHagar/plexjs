# CreateMarkerResponse

OK

## Example Usage

```typescript
import { CreateMarkerResponse, CreateMarkerType } from "@parke.dev/plexjs/models/operations";

let value: CreateMarkerResponse = {
  mediaContainer: {
    title: "string value",
    type: CreateMarkerType.Intro,
    color: "string value",
    endTimeOffset: 1,
    id: 1,
    startTimeOffset: 1,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                                         | [operations.CreateMarkerMediaContainer](../../models/operations/createmarkermediacontainer.md)                           | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"title": "string value",<br/>"type": "intro",<br/>"color": "string value",<br/>"endTimeOffset": 1,<br/>"id": 1,<br/>"startTimeOffset": 1<br/>} |
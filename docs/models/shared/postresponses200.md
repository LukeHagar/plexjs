# PostResponses200

OK

## Example Usage

```typescript
import { PostResponses200, TypeResponse } from "@parke.dev/plexjs/models/shared";

let value: PostResponses200 = {
  mediaContainer: {
    title: "string value",
    type: TypeResponse.Intro,
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
| `mediaContainer`                                                                                                         | [shared.PostResponses200MediaContainer](../../models/shared/postresponses200mediacontainer.md)                           | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"title": "string value",<br/>"type": "intro",<br/>"color": "string value",<br/>"endTimeOffset": 1,<br/>"id": 1,<br/>"startTimeOffset": 1<br/>} |
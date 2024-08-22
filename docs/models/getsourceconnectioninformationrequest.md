# GetSourceConnectionInformationRequest

## Example Usage

```typescript
import { GetSourceConnectionInformationRequest } from "@lukehagar/plexjs";

let value: GetSourceConnectionInformationRequest = {
    source: "server://client-identifier",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `source`                                       | *string*                                       | :heavy_check_mark:                             | The source identifier with an included prefix. | server://client-identifier                     |
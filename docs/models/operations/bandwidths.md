# Bandwidths

A list of media times and bandwidths when trascoding is using with auto adjustment of bandwidth

## Example Usage

```typescript
import { Bandwidths } from "@parke.dev/plexjs/models/operations";

let value: Bandwidths = {
  bandwidth: [
    {
      bandwidth: 1,
      resolution: "string value",
      time: 1,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `bandwidth`                                            | [shared.Bandwidth](../../models/shared/bandwidth.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
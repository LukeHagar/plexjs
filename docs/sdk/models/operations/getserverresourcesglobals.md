# GetServerResourcesGlobals

## Example Usage

```typescript
import { GetServerResourcesGlobals } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerResourcesGlobals = {
  clientIdentifier: "abc123",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `accepts`                                               | [shared.Accepts](../../../sdk/models/shared/accepts.md) | :heavy_minus_sign:                                      | Indicates the client accepts the indicated media types  |                                                         |
| `clientIdentifier`                                      | *string*                                                | :heavy_minus_sign:                                      | An opaque identifier unique to the client               | abc123                                                  |
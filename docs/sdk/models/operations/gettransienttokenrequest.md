# GetTransientTokenRequest

## Example Usage

```typescript
import { GetTransientTokenQueryParamType, GetTransientTokenRequest, Scope } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTransientTokenRequest = {
  type: GetTransientTokenQueryParamType.Delegation,
  scope: Scope.All,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                          | [operations.GetTransientTokenQueryParamType](../../../sdk/models/operations/gettransienttokenqueryparamtype.md) | :heavy_check_mark:                                                                                              | `delegation` - This is the only supported `type` parameter.                                                     |
| `scope`                                                                                                         | [operations.Scope](../../../sdk/models/operations/scope.md)                                                     | :heavy_check_mark:                                                                                              | `all` - This is the only supported `scope` parameter.                                                           |
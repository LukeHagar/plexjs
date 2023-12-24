# GetTransientTokenRequest


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [operations.QueryParamType](../../models/operations/queryparamtype.md) | :heavy_check_mark:                                                     | `delegation` - This is the only supported `type` parameter.            |
| `scope`                                                                | [operations.Scope](../../models/operations/scope.md)                   | :heavy_check_mark:                                                     | `all` - This is the only supported `scope` parameter.                  |
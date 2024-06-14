# GetTransientTokenRequest


## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.GetTransientTokenQueryParamType](../models/gettransienttokenqueryparamtype.md) | :heavy_check_mark:                                                                     | `delegation` - This is the only supported `type` parameter.                            |
| `scope`                                                                                | [models.Scope](../models/scope.md)                                                     | :heavy_check_mark:                                                                     | `all` - This is the only supported `scope` parameter.                                  |
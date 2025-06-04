# GetTopWatchedContentRequest

## Example Usage

```typescript
import {
  GetTopWatchedContentQueryParamIncludeGuids,
  GetTopWatchedContentQueryParamType,
  GetTopWatchedContentRequest,
} from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTopWatchedContentRequest = {
  type: GetTopWatchedContentQueryParamType.TvShow,
  includeGuids: GetTopWatchedContentQueryParamIncludeGuids.Enable,
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  | Example                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                       | [operations.GetTopWatchedContentQueryParamType](../../../sdk/models/operations/gettopwatchedcontentqueryparamtype.md)                                                                        | :heavy_check_mark:                                                                                                                                                                           | The type of media to retrieve or filter by.<br/>1 = movie<br/>2 = show<br/>3 = season<br/>4 = episode<br/>E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries<br/> | 2                                                                                                                                                                                            |
| `includeGuids`                                                                                                                                                                               | [operations.GetTopWatchedContentQueryParamIncludeGuids](../../../sdk/models/operations/gettopwatchedcontentqueryparamincludeguids.md)                                                        | :heavy_minus_sign:                                                                                                                                                                           | Adds the Guid object to the response<br/>                                                                                                                                                    | 1                                                                                                                                                                                            |
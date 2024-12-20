# GetSearchAllLibrariesRequest

## Example Usage

```typescript
import {
  GetSearchAllLibrariesRequest,
  QueryParamIncludeCollections,
  QueryParamIncludeExternalMedia,
  SearchTypes,
} from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesRequest = {
  query: "<value>",
  clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
  searchTypes: [
    SearchTypes.OtherVideos,
  ],
  includeCollections: QueryParamIncludeCollections.Enable,
  includeExternalMedia: QueryParamIncludeExternalMedia.Enable,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                       | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The search query term.                                                                                        |                                                                                                               |
| `clientID`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | An opaque identifier unique to the client (UUID, serial number, or other unique device ID)                    | 3381b62b-9ab7-4e37-827b-203e9809eb58                                                                          |
| `limit`                                                                                                       | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Limit the number of results returned.                                                                         |                                                                                                               |
| `searchTypes`                                                                                                 | [operations.SearchTypes](../../../sdk/models/operations/searchtypes.md)[]                                     | :heavy_minus_sign:                                                                                            | A comma-separated list of search types to include. Valid values are: movies, music, otherVideos, people, tv.<br/> | movies,music,otherVideos,people,tv                                                                            |
| `includeCollections`                                                                                          | [operations.QueryParamIncludeCollections](../../../sdk/models/operations/queryparamincludecollections.md)     | :heavy_minus_sign:                                                                                            | Whether to include collections in the search results.                                                         | 1                                                                                                             |
| `includeExternalMedia`                                                                                        | [operations.QueryParamIncludeExternalMedia](../../../sdk/models/operations/queryparamincludeexternalmedia.md) | :heavy_minus_sign:                                                                                            | Whether to include external media in the search results.                                                      | 1                                                                                                             |
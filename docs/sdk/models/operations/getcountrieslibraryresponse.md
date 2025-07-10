# GetCountriesLibraryResponse

## Example Usage

```typescript
import { GetCountriesLibraryResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetCountriesLibraryResponse = {
  contentType: "<value>",
  statusCode: 138249,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `object`                                                                                                        | [operations.GetCountriesLibraryResponseBody](../../../sdk/models/operations/getcountrieslibraryresponsebody.md) | :heavy_minus_sign:                                                                                              | Successful response containing media container data.                                                            |
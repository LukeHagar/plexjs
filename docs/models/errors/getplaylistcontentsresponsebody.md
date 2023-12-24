# GetPlaylistContentsResponseBody

Unauthorized - Returned if the X-Plex-Token is missing from the header or query.


## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `errors`                                                                               | [errors.GetPlaylistContentsErrors](../../models/errors/getplaylistcontentserrors.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `rawResponse`                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                  | :heavy_minus_sign:                                                                     | Raw HTTP response; suitable for custom response parsing                                |
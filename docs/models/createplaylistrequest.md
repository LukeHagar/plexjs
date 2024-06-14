# CreatePlaylistRequest


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `title`                                              | *string*                                             | :heavy_check_mark:                                   | name of the playlist                                 |
| `type`                                               | [models.QueryParamType](../models/queryparamtype.md) | :heavy_check_mark:                                   | type of playlist to create                           |
| `smart`                                              | [models.Smart](../models/smart.md)                   | :heavy_check_mark:                                   | whether the playlist is smart or not                 |
| `uri`                                                | *string*                                             | :heavy_check_mark:                                   | the content URI for the playlist                     |
| `playQueueID`                                        | *number*                                             | :heavy_minus_sign:                                   | the play queue to copy to a playlist                 |
# CreatePlaylistRequest


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `title`                                              | *string*                                             | :heavy_check_mark:                                   | name of the playlist                                 |
| `type`                                               | [operations.TypeT](../../models/operations/typet.md) | :heavy_check_mark:                                   | type of playlist to create                           |
| `smart`                                              | [operations.Smart](../../models/operations/smart.md) | :heavy_check_mark:                                   | whether the playlist is smart or not                 |
| `uri`                                                | *string*                                             | :heavy_check_mark:                                   | the content URI for the playlist                     |
| `playQueueID`                                        | *number*                                             | :heavy_minus_sign:                                   | the play queue to copy to a playlist                 |
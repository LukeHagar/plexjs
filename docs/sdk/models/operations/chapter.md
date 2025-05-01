# Chapter

The thumbnail for the chapter

## Example Usage

```typescript
import { Chapter } from "@lukehagar/plexjs/sdk/models/operations";

let value: Chapter = {
  id: 4,
  filter: "thumb=4",
  index: 1,
  startTimeOffset: 0,
  endTimeOffset: 100100,
  thumb: "/library/media/46883/chapterImages/1",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *number*                             | :heavy_check_mark:                   | N/A                                  | 4                                    |
| `filter`                             | *string*                             | :heavy_check_mark:                   | N/A                                  | thumb=4                              |
| `index`                              | *number*                             | :heavy_check_mark:                   | N/A                                  | 1                                    |
| `startTimeOffset`                    | *number*                             | :heavy_check_mark:                   | N/A                                  | 0                                    |
| `endTimeOffset`                      | *number*                             | :heavy_check_mark:                   | N/A                                  | 100100                               |
| `thumb`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | /library/media/46883/chapterImages/1 |
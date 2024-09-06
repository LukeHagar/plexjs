# QueryParamForce

Force overwriting of duplicate playlists.  
By default, a playlist file uploaded with the same path will overwrite the existing playlist. 
The `force` argument is used to disable overwriting.  
If the `force` argument is set to 0, a new playlist will be created suffixed with the date and time that the duplicate was uploaded.


## Example Usage

```typescript
import { QueryParamForce } from "@lukehagar/plexjs";

let value: QueryParamForce = QueryParamForce.Zero;
```

## Values

| Name   | Value  |
| ------ | ------ |
| `Zero` | 0      |
| `One`  | 1      |
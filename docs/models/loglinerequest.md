# LogLineRequest

## Example Usage

```typescript
import { Level, LogLineRequest } from "@lukehagar/plexjs";

let value: LogLineRequest = {
    level: Level.Four,
    message: "Test log message",
    source: "Postman",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `level`                                                                                                       | [models.Level](../models/level.md)                                                                            | :heavy_check_mark:                                                                                            | An integer log level to write to the PMS log with.  <br/>0: Error  <br/>1: Warning  <br/>2: Info  <br/>3: Debug  <br/>4: Verbose<br/> |                                                                                                               |
| `message`                                                                                                     | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The text of the message to write to the log.                                                                  | Test log message                                                                                              |
| `source`                                                                                                      | *string*                                                                                                      | :heavy_check_mark:                                                                                            | a string indicating the source of the message.                                                                | Postman                                                                                                       |
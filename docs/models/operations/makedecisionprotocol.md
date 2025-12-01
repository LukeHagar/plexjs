# MakeDecisionProtocol

Indicates the network streaming protocol to be used for the transcode session: * 'http' - include the file in the http response such as MKV streaming * 'hls' - hls stream (RFC 8216) * 'dash' - dash stream (ISO/IEC 23009-1:2022)


## Example Usage

```typescript
import { MakeDecisionProtocol } from "@lukehagar/plexjs/models/operations";

let value: MakeDecisionProtocol = MakeDecisionProtocol.Dash;
```

## Values

| Name   | Value  |
| ------ | ------ |
| `Http` | http   |
| `Hls`  | hls    |
| `Dash` | dash   |
# TranscodeSubtitlesProtocol

Indicates the network streaming protocol to be used for the transcode session: * 'http' - include the file in the http response such as MKV streaming * 'hls' - hls stream (RFC 8216) * 'dash' - dash stream (ISO/IEC 23009-1:2022)


## Example Usage

```typescript
import { TranscodeSubtitlesProtocol } from "@lukehagar/plexjs/sdk/models/operations";

let value: TranscodeSubtitlesProtocol = TranscodeSubtitlesProtocol.Dash;
```

## Values

| Name   | Value  |
| ------ | ------ |
| `Http` | http   |
| `Hls`  | hls    |
| `Dash` | dash   |
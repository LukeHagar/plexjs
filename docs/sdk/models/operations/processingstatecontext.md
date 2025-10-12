# ProcessingStateContext

The error which could have occurred (or `good`)

## Example Usage

```typescript
import { ProcessingStateContext } from "@lukehagar/plexjs/sdk/models/operations";

let value: ProcessingStateContext = ProcessingStateContext.Good;
```

## Values

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `Good`                    | good                      |
| `SourceFileUnavailable`   | sourceFileUnavailable     |
| `SourceFileMetadataError` | sourceFileMetadataError   |
| `ClientProfileError`      | clientProfileError        |
| `IoError`                 | ioError                   |
| `TranscoderError`         | transcoderError           |
| `UnknownError`            | unknownError              |
| `MediaAnalysisError`      | mediaAnalysisError        |
| `DownloadFailed`          | downloadFailed            |
| `AccessDenied`            | accessDenied              |
| `CannotTranscode`         | cannotTranscode           |
| `CodecInstallError`       | codecInstallError         |
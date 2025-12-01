# ProcessingStateContext

The error which could have occurred (or `good`)

## Example Usage

```typescript
import { ProcessingStateContext } from "@lukehagar/plexjs/models/operations";

let value: ProcessingStateContext = ProcessingStateContext.Good;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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
| -                         | `Unrecognized<string>`    |
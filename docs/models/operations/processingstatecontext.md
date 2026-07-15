# ProcessingStateContext

The error which could have occurred (or `good`)

## Example Usage

```typescript
import { ProcessingStateContext } from "@parke.dev/plexjs/models/operations";

let value: ProcessingStateContext = ProcessingStateContext.Good;

// Open enum: unrecognized values are captured as Unrecognized<string>
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
| -                         | `Unrecognized<string>`    |
# PathParamTaskName

The name of the task to be started.

## Example Usage

```typescript
import { PathParamTaskName } from "@lukehagar/plexjs";

let value: PathParamTaskName = PathParamTaskName.RefreshPeriodicMetadata;
```

## Values

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `BackupDatabase`            | BackupDatabase              |
| `BuildGracenoteCollections` | BuildGracenoteCollections   |
| `CheckForUpdates`           | CheckForUpdates             |
| `CleanOldBundles`           | CleanOldBundles             |
| `CleanOldCacheFiles`        | CleanOldCacheFiles          |
| `DeepMediaAnalysis`         | DeepMediaAnalysis           |
| `GenerateAutoTags`          | GenerateAutoTags            |
| `GenerateChapterThumbs`     | GenerateChapterThumbs       |
| `GenerateMediaIndexFiles`   | GenerateMediaIndexFiles     |
| `OptimizeDatabase`          | OptimizeDatabase            |
| `RefreshLibraries`          | RefreshLibraries            |
| `RefreshLocalMedia`         | RefreshLocalMedia           |
| `RefreshPeriodicMetadata`   | RefreshPeriodicMetadata     |
| `UpgradeMediaAnalysis`      | UpgradeMediaAnalysis        |
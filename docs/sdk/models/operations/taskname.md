# TaskName

the name of the task to be started.

## Example Usage

```typescript
import { TaskName } from "@lukehagar/plexjs/sdk/models/operations";

let value: TaskName = TaskName.RefreshLocalMedia;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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
| -                           | `Unrecognized<string>`      |
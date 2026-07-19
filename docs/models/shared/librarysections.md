# LibrarySections

OK

## Example Usage

```typescript
import { LibrarySections } from "@parke.dev/plexjs/models/shared";

let value: LibrarySections = {
  mediaContainer: {
    friendlyName: "My Plex Server",
    machineIdentifier: "abc123",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                             | [shared.LibrarySectionsMediaContainer](../../models/shared/librarysectionsmediacontainer.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          | {<br/>"friendlyName": "My Plex Server",<br/>"machineIdentifier": "abc123"<br/>}              |
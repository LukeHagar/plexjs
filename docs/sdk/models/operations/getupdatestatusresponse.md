# GetUpdateStatusResponse

## Example Usage

```typescript
import { GetUpdateStatusResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetUpdateStatusResponse = {
  contentType: "<value>",
  statusCode: 503,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 1,
      canInstall: false,
      checkedAt: 1705801232,
      downloadURL:
        "https://plex.tv/downloads/latest/5?channel=8&build=linux-x86_64&distro=redhat&X-Plex-Token=xxxxxxxxxxxxxxxxxxxx",
      status: 0,
      release: [
        {
          key: "https://plex.tv/updater/releases/5136",
          version: "1.40.0.7775-456fbaf97",
          added:
            "(PLEASE NOTE) This version makes changes to the database which will make it compatible only with server versions 1.31.2 or higher (released March 14). You will not be able to use your database on Plex Media Server versions lower than this after this update. Please also be patient when updating to this version if you have a very large database and allow the upgrade process to finish.\n"
            + "(Collections) Items added to a collection from the item context menu will now lock the collection field on the items (#12793)\n"
            + "(Music) Store track genres and add filtering options (#14653)\n"
            + "(Music) Support ID3v2.4 null-separated tags for genres and release type (#14653)\n"
            + "(View History) No longer create a view history entry for items marked as played (#10888)\n"
            + "(Web) Updated to 4.118.0",
          fixed:
            "(Agents) Changing a 'Other Videos' type library to the modern movie agent would fail (#14483)\n"
            + "(Agents) It is possible that agents are not initialised during startup on rare occasions (#14654)\n"
            + "(Agents) Remove the legacy OpenSubtitles agent which is no longer supported upstream (#14667)\n"
            + "(Collection) Server could become unresponsive when collection membership changes (#14612)\n"
            + "(DVR) Previously watched recordings could be deleted without being watched again (#13779)\n"
            + "(Libraries) When performing fix match on items from certain music libraries the language would default to Arabic (#14501)\n"
            + "(Library) The Content Rating not equal to None filter does not work (#14620)\n"
            + "(Search) Album search results could contain all the album's tracks too (#14486)\n"
            + "(Subtitles) In some circumstances, sidecar subtitles can show up for media when they're no longer available (#14674)\n"
            + "(Transcoder) HW encoding would fail on devices with no rate control (#14222)\n"
            + "(Transcoder) Software transcoding on Ubuntu could cause unexpected behavior (#14605)",
          downloadURL:
            "https://plex.tv/downloads/latest/5?channel=8&build=linux-x86_64&distro=redhat&X-Plex-Token=xxxxxxxxxxxxxxxxxxxx",
          state: "notify",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `object`                                                                                                | [operations.GetUpdateStatusResponseBody](../../../sdk/models/operations/getupdatestatusresponsebody.md) | :heavy_minus_sign:                                                                                      | The Server Updates                                                                                      |
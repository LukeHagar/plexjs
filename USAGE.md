<!-- Start SDK Example Usage [usage] -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const result = await plexAPI.general.getServerInfo({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
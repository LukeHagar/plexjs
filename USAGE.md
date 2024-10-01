<!-- Start SDK Example Usage [usage] -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const result = await plexAPI.server.getServerCapabilities();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
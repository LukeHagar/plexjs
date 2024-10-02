<!-- Start SDK Example Usage [usage] -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
  clientName: "Plex for Roku",
  clientVersion: "2.4.1",
  platform: "Roku",
  deviceNickname: "Roku 3",
});

async function run() {
  const result = await plexAPI.server.getServerCapabilities();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
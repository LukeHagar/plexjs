<!-- Start SDK Example Usage [usage] -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.server.getServerCapabilities();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
<!-- Start SDK Example Usage [usage] -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

async function run() {
    const sdk = new PlexAPI({
        accessToken: "<YOUR_API_KEY_HERE>",
        xPlexClientIdentifier: "<value>",
    });

    const result = await sdk.server.getServerCapabilities();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
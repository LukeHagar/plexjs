<!-- Start SDK Example Usage [usage] -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

async function run() {
    const sdk = new PlexAPI({
        accessToken: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.server.getServerCapabilities();

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->
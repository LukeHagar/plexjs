<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
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
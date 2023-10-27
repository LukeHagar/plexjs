import { PlexSDK } from '@lukehagar/plexjs';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getServerCapabilities();
  console.log(result.data);
})();

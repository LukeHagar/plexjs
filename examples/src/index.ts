import {
  Configuration,
  ServerApi,
  DevicesApi,
  PlexTvApi,
} from "@lukehagar/plexjs";
import dotenv from "dotenv";
dotenv.config();

const config = new Configuration({
  basePath: process.env.BASE_PATH,
  plexToken: process.env.PLEX_TOKEN,
});

// new ServerApi(config).getServerCapabilities().then((resp) => console.log(resp));

// new DevicesApi(config).getDevices().then((resp) => console.log(resp));

new PlexTvApi(config).getUserDetails().then((resp) => console.log(resp));

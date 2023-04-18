import { Configuration, DevicesApi } from "@lukehagar/plexjs";

let Config = new Configuration({ basePath: "127.0.0.1:80" });
let devicesApi = new DevicesApi(Config);

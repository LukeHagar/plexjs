# Plex API Client

## Description

A typescript sdk for accessing the Plex.tv and Plex Media Server REST API's.

## Installation

```bash
npm install plexjs
```


```javascript
import { Configuration, ServerApi } from "@lukehagar/plexjs";
import dotenv from "dotenv";
dotenv.config();

const config = new Configuration({
  basePath: process.env.BASE_PATH,
  plexToken: process.env.PLEX_TOKEN,
});

const serverApiClient = new ServerApi(config);

serverApiClient.getServerCapabilities().then((resp) => console.log(resp));
```

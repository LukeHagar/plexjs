# Plex API Client

[![Discord](https://img.shields.io/discord/1095524608406474802?style=social&logo=discord)](https://discord.gg/HQTPSJnWhb)
[![Npm package monthly downloads](https://badgen.net/npm/dm/@lukehagar/plexjs)](https://npmjs.ccom/package/@lukehagar/plexjs)
[![GitHub tag](https://img.shields.io/github/tag/LukeHagar/plexjs.svg)](https://GitHub.com/LukeHagar/plexjs/tags/)

## Description



A typescript sdk for interacting with Plex.tv and Plex Media Server REST API's.

Documentation for all of the available endpoints [can be found here](https://plexapi.dev/docs/plex)

## Installation

npm
```bash
npm install @lukehagar/plexjs
```

yarn
```bash
yarn add @lukehagar/plexjs
```

## Usage

```javascript
import {
  Configuration,
  ServerApi,
  DevicesApi,
  UserApi,
} from "@lukehagar/plexjs";
import dotenv from "dotenv";
dotenv.config();

const config = new Configuration({
  basePath: process.env.BASE_PATH,
  plexToken: process.env.PLEX_TOKEN,
});

new ServerApi(config).getServerCapabilities().then((resp) => console.log(resp));

new DevicesApi(config).getDevices().then((resp) => console.log(resp));

new UserApi(config).getUserDetails().then((resp) => console.log(resp));
```

import { ActivitiesService } from './services/activities/Activities';
import { ButlerService } from './services/butler/Butler';
import { HubsService } from './services/hubs/Hubs';
import { LibraryService } from './services/library/Library';
import { LogService } from './services/log/Log';
import { MediaService } from './services/media/Media';
import { PlaylistsService } from './services/playlists/Playlists';
import { SearchService } from './services/search/Search';
import { SecurityService } from './services/security/Security';
import { ServerService } from './services/server/Server';
import { SessionsService } from './services/sessions/Sessions';
import { UpdaterService } from './services/updater/Updater';
import { VideoService } from './services/video/Video';

export * from './models';

export * as ActivitiesModels from './services/activities';
export * as ButlerModels from './services/butler';
export * as HubsModels from './services/hubs';
export * as LibraryModels from './services/library';
export * as LogModels from './services/log';
export * as PlaylistsModels from './services/playlists';
export * as SearchModels from './services/search';
export * as SecurityModels from './services/security';
export * as ServerModels from './services/server';
export * as SessionsModels from './services/sessions';
export * as UpdaterModels from './services/updater';
export * as VideoModels from './services/video';

type Config = {
  apiKey?: string;
  apiKeyHeader?: string;
};

export * from './http/errors';

/**
 * An Open API Spec for interacting with Plex.tv and Plex Servers
 */
export class PlexSDK {
  public activities: ActivitiesService;
  public butler: ButlerService;
  public hubs: HubsService;
  public library: LibraryService;
  public log: LogService;
  public media: MediaService;
  public playlists: PlaylistsService;
  public search: SearchService;
  public security: SecurityService;
  public server: ServerService;
  public sessions: SessionsService;
  public updater: UpdaterService;
  public video: VideoService;

  constructor({ apiKey = '', apiKeyHeader = 'X-Plex-Token' }: Config) {
    this.activities = new ActivitiesService(apiKey, apiKeyHeader);
    this.butler = new ButlerService(apiKey, apiKeyHeader);
    this.hubs = new HubsService(apiKey, apiKeyHeader);
    this.library = new LibraryService(apiKey, apiKeyHeader);
    this.log = new LogService(apiKey, apiKeyHeader);
    this.media = new MediaService(apiKey, apiKeyHeader);
    this.playlists = new PlaylistsService(apiKey, apiKeyHeader);
    this.search = new SearchService(apiKey, apiKeyHeader);
    this.security = new SecurityService(apiKey, apiKeyHeader);
    this.server = new ServerService(apiKey, apiKeyHeader);
    this.sessions = new SessionsService(apiKey, apiKeyHeader);
    this.updater = new UpdaterService(apiKey, apiKeyHeader);
    this.video = new VideoService(apiKey, apiKeyHeader);
  }

  /**
   * Sets the baseUrl that the SDK will use for its requests.
   * @param {string} url
   */
  setBaseUrl(url: string): void {
    this.activities.setBaseUrl(url);
    this.butler.setBaseUrl(url);
    this.hubs.setBaseUrl(url);
    this.library.setBaseUrl(url);
    this.log.setBaseUrl(url);
    this.media.setBaseUrl(url);
    this.playlists.setBaseUrl(url);
    this.search.setBaseUrl(url);
    this.security.setBaseUrl(url);
    this.server.setBaseUrl(url);
    this.sessions.setBaseUrl(url);
    this.updater.setBaseUrl(url);
    this.video.setBaseUrl(url);
  }

  /**
   * Sets the api key used for authentication.
   * @param {string} key
   * @param {string} header
   */
  setApiKey(key: string, header: string = 'X-Plex-Token') {
    this.activities.setApiKey(key, header);
    this.butler.setApiKey(key, header);
    this.hubs.setApiKey(key, header);
    this.library.setApiKey(key, header);
    this.log.setApiKey(key, header);
    this.media.setApiKey(key, header);
    this.playlists.setApiKey(key, header);
    this.search.setApiKey(key, header);
    this.security.setApiKey(key, header);
    this.server.setApiKey(key, header);
    this.sessions.setApiKey(key, header);
    this.updater.setApiKey(key, header);
    this.video.setApiKey(key, header);
  }
}

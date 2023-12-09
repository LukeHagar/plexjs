import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { Type } from './models/Type';
import { Smart } from './models/Smart';
import { PlaylistType } from './models/PlaylistType';
import { Force } from './models/Force';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class PlaylistsService extends BaseService {
  /**
   * @summary Create a Playlist
   * @description Create a new playlist. By default the playlist is blank. To create a playlist along with a first item, pass:
- `uri` - The content URI for what we're playing (e.g. `library://...`).
- `playQueueID` - To create a playlist from an existing play queue.


   * @param title name of the playlist
   * @param type_ type of playlist to create
   * @param smart whether the playlist is smart or not
   * @param optionalParams - Optional parameters
   * @param optionalParams.uri - the content URI for the playlist
   * @param optionalParams.playQueueID - the play queue to copy to a playlist
   * @returns {Promise<any>} - The promise with the result
   */
  async createPlaylist(
    title: string,
    type_: Type,
    smart: Smart,
    optionalParams: { uri?: string; playQueueId?: number } = {},
  ): Promise<any> {
    const { uri, playQueueId } = optionalParams;
    if (title === undefined || type_ === undefined || smart === undefined) {
      throw new Error(
        'The following are required parameters: title,type_,smart, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (title) {
      queryParams.push(serializeQuery('form', true, 'title', title));
    }
    if (type_) {
      queryParams.push(serializeQuery('form', true, 'type', type_));
    }
    if (smart) {
      queryParams.push(serializeQuery('form', true, 'smart', smart));
    }
    if (uri) {
      queryParams.push(serializeQuery('form', true, 'uri', uri));
    }
    if (playQueueId) {
      queryParams.push(serializeQuery('form', true, 'playQueueID', playQueueId));
    }
    const urlEndpoint = '/playlists';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      { title, type_, smart, uri, playQueueID: playQueueId },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Get All Playlists
   * @description Get All Playlists given the specified filters.

   * @param optionalParams - Optional parameters
   * @param optionalParams.playlistType - limit to a type of playlist.
   * @param optionalParams.smart - type of playlists to return (default is all).
   * @returns {Promise<any>} - The promise with the result
   */
  async getPlaylists(
    optionalParams: { playlistType?: PlaylistType; smart?: Smart } = {},
  ): Promise<any> {
    const { playlistType, smart } = optionalParams;

    const queryParams: string[] = [];
    if (playlistType) {
      queryParams.push(serializeQuery('form', true, 'playlistType', playlistType));
    }
    if (smart) {
      queryParams.push(serializeQuery('form', true, 'smart', smart));
    }
    const urlEndpoint = '/playlists/all';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Retrieve Playlist
   * @description Gets detailed metadata for a playlist. A playlist for many purposes (rating, editing metadata, tagging), can be treated like a regular metadata item:
Smart playlist details contain the `content` attribute. This is the content URI for the generator. This can then be parsed by a client to provide smart playlist editing.


   * @param playlistID the ID of the playlist
   * @returns {Promise<any>} - The promise with the result
   */
  async getPlaylist(playlistId: number): Promise<any> {
    if (playlistId === undefined) {
      throw new Error('The following parameter is required: playlistId, cannot be empty or blank');
    }
    let urlEndpoint = '/playlists/{playlistID}';
    urlEndpoint = urlEndpoint.replace(
      '{playlistID}',
      serializePath('simple', false, playlistId, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Update a Playlist
   * @description From PMS version 1.9.1 clients can also edit playlist metadata using this endpoint as they would via `PUT /library/metadata/{playlistID}`


   * @param playlistID the ID of the playlist
   * @returns {Promise<any>} - The promise with the result
   */
  async updatePlaylist(playlistId: number): Promise<any> {
    if (playlistId === undefined) {
      throw new Error('The following parameter is required: playlistId, cannot be empty or blank');
    }
    let urlEndpoint = '/playlists/{playlistID}';
    urlEndpoint = urlEndpoint.replace(
      '{playlistID}',
      serializePath('simple', false, playlistId, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.put(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Deletes a Playlist
   * @description This endpoint will delete a playlist


   * @param playlistID the ID of the playlist
   * @returns {Promise<any>} - The promise with the result
   */
  async deletePlaylist(playlistId: number): Promise<any> {
    if (playlistId === undefined) {
      throw new Error('The following parameter is required: playlistId, cannot be empty or blank');
    }
    let urlEndpoint = '/playlists/{playlistID}';
    urlEndpoint = urlEndpoint.replace(
      '{playlistID}',
      serializePath('simple', false, playlistId, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Retrieve Playlist Contents
   * @description Gets the contents of a playlist. Should be paged by clients via standard mechanisms. 
By default leaves are returned (e.g. episodes, movies). In order to return other types you can use the `type` parameter. 
For example, you could use this to display a list of recently added albums vis a smart playlist. 
Note that for dumb playlists, items have a `playlistItemID` attribute which is used for deleting or moving items.


   * @param playlistID the ID of the playlist
   * @param type_ the metadata type of the item to return
   * @returns {Promise<any>} - The promise with the result
   */
  async getPlaylistContents(playlistId: number, type_: number): Promise<any> {
    if (playlistId === undefined || type_ === undefined) {
      throw new Error(
        'The following are required parameters: playlistId,type_, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/playlists/{playlistID}/items';
    urlEndpoint = urlEndpoint.replace(
      '{playlistID}',
      serializePath('simple', false, playlistId, undefined),
    );
    if (type_) {
      queryParams.push(serializeQuery('form', true, 'type', type_));
    }
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Adding to a Playlist
   * @description Adds a generator to a playlist, same parameters as the POST above. With a dumb playlist, this adds the specified items to the playlist. 
With a smart playlist, passing a new `uri` parameter replaces the rules for the playlist. Returns the playlist.


   * @param playlistID the ID of the playlist
   * @param uri the content URI for the playlist
   * @param playQueueID the play queue to add to a playlist
   * @returns {Promise<any>} - The promise with the result
   */
  async addPlaylistContents(playlistId: number, uri: string, playQueueId: number): Promise<any> {
    if (playlistId === undefined || uri === undefined || playQueueId === undefined) {
      throw new Error(
        'The following are required parameters: playlistId,uri,playQueueId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/playlists/{playlistID}/items';
    urlEndpoint = urlEndpoint.replace(
      '{playlistID}',
      serializePath('simple', false, playlistId, undefined),
    );
    if (uri) {
      queryParams.push(serializeQuery('form', true, 'uri', uri));
    }
    if (playQueueId) {
      queryParams.push(serializeQuery('form', true, 'playQueueID', playQueueId));
    }
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.put(
      finalUrl,
      { uri, playQueueID: playQueueId },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Delete Playlist Contents
   * @description Clears a playlist, only works with dumb playlists. Returns the playlist.


   * @param playlistID the ID of the playlist
   * @returns {Promise<any>} - The promise with the result
   */
  async clearPlaylistContents(playlistId: number): Promise<any> {
    if (playlistId === undefined) {
      throw new Error('The following parameter is required: playlistId, cannot be empty or blank');
    }
    let urlEndpoint = '/playlists/{playlistID}/items';
    urlEndpoint = urlEndpoint.replace(
      '{playlistID}',
      serializePath('simple', false, playlistId, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Upload Playlist
   * @description Imports m3u playlists by passing a path on the server to scan for m3u-formatted playlist files, or a path to a single playlist file.


   * @param path absolute path to a directory on the server where m3u files are stored, or the absolute path to a playlist file on the server. 
If the `path` argument is a directory, that path will be scanned for playlist files to be processed. 
Each file in that directory creates a separate playlist, with a name based on the filename of the file that created it. 
The GUID of each playlist is based on the filename. 
If the `path` argument is a file, that file will be used to create a new playlist, with the name based on the filename of the file that created it. 
The GUID of each playlist is based on the filename.

   * @param force force overwriting of duplicate playlists. By default, a playlist file uploaded with the same path will overwrite the existing playlist. 
The `force` argument is used to disable overwriting. If the `force` argument is set to 0, a new playlist will be created suffixed with the date and time that the duplicate was uploaded.

   * @returns {Promise<any>} - The promise with the result
   */
  async uploadPlaylist(path: string, force: Force): Promise<any> {
    if (path === undefined || force === undefined) {
      throw new Error(
        'The following are required parameters: path,force, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (path) {
      queryParams.push(serializeQuery('form', true, 'path', path));
    }
    if (force) {
      queryParams.push(serializeQuery('form', true, 'force', force));
    }
    const urlEndpoint = '/playlists/upload';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      { path, force },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }
}

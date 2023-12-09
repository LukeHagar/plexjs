import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { GetRecentlyAddedResponse } from './models/GetRecentlyAddedResponse';
import { IncludeDetails } from './models/IncludeDetails';
import { GetOnDeckResponse } from './models/GetOnDeckResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class LibraryService extends BaseService {
  /**
   * @summary Get Hash Value
   * @description This resource returns hash values for local files

   * @param url This is the path to the local file, must be prefixed by `file://`
   * @param optionalParams - Optional parameters
   * @param optionalParams.type_ - Item type
   * @returns {Promise<any>} - The promise with the result
   */
  async getFileHash(url: string, optionalParams: { type_?: number } = {}): Promise<any> {
    const { type_ } = optionalParams;
    if (url === undefined) {
      throw new Error('The following parameter is required: url, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (url) {
      queryParams.push(serializeQuery('form', true, 'url', url));
    }
    if (type_) {
      queryParams.push(serializeQuery('form', true, 'type', type_));
    }
    const urlEndpoint = '/library/hashes';
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
   * @summary Get Recently Added
   * @description This endpoint will return the recently added content.


   * @returns {Promise<Response<GetRecentlyAddedResponse>>} - The promise with the result
   */
  async getRecentlyAdded(): Promise<Response<GetRecentlyAddedResponse>> {
    const urlEndpoint = '/library/recentlyAdded';
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
   * @summary Get All Libraries
   * @description A library section (commonly referred to as just a library) is a collection of media. 
Libraries are typed, and depending on their type provide either a flat or a hierarchical view of the media. 
For example, a music library has an artist > albums > tracks structure, whereas a movie library is flat.

Libraries have features beyond just being a collection of media; for starters, they include information about supported types, filters and sorts. 
This allows a client to provide a rich interface around the media (e.g. allow sorting movies by release year).


   * @returns {Promise<any>} - The promise with the result
   */
  async getLibraries(): Promise<any> {
    const urlEndpoint = '/library/sections';
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
   * @summary Get Library Details
   * @description Returns details for the library. This can be thought of as an interstitial endpoint because it contains information about the library, rather than content itself. These details are:

- A list of `Directory` objects: These used to be used by clients to build a menuing system. There are four flavors of directory found here:
  - Primary: (e.g. all, On Deck) These are still used in some clients to provide "shortcuts" to subsets of media. However, with the exception of On Deck, all of them can be created by media queries, and the desire is to allow these to be customized by users.
  - Secondary: These are marked with `secondary="1"` and were used by old clients to provide nested menus allowing for primative (but structured) navigation.
  - Special: There is a By Folder entry which allows browsing the media by the underlying filesystem structure, and there's a completely obsolete entry marked `search="1"` which used to be used to allow clients to build search dialogs on the fly.
- A list of `Type` objects: These represent the types of things found in this library, and for each one, a list of `Filter` and `Sort` objects. These can be used to build rich controls around a grid of media to allow filtering and organizing. Note that these filters and sorts are optional, and without them, the client won't render any filtering controls. The `Type` object contains:
  - `key`: This provides the root endpoint returning the actual media list for the type.
  - `type`: This is the metadata type for the type (if a standard Plex type).
  - `title`: The title for for the content of this type (e.g. "Movies").
- Each `Filter` object contains a description of the filter. Note that it is not an exhaustive list of the full media query language, but an inportant subset useful for top-level API.
  - `filter`: This represents the filter name used for the filter, which can be used to construct complex media queries with.
  - `filterType`: This is either `string`, `integer`, or `boolean`, and describes the type of values used for the filter.
  - `key`: This provides the endpoint where the possible range of values for the filter can be retrieved (e.g. for a "Genre" filter, it returns a list of all the genres in the library). This will include a `type` argument that matches the metadata type of the Type element.
  - `title`: The title for the filter.
- Each `Sort` object contains a description of the sort field.
  - `defaultDirection`: Can be either `asc` or `desc`, and specifies the default direction for the sort field (e.g. titles default to alphabetically ascending).
  - `descKey` and `key`: Contains the parameters passed to the `sort=...` media query for each direction of the sort.
  - `title`: The title of the field.


   * @param sectionId the Id of the library to query
   * @param optionalParams - Optional parameters
   * @param optionalParams.includeDetails - Whether or not to include details for a section (types, filters, and sorts). 
Only exists for backwards compatibility, media providers other than the server libraries have it on always.

   * @returns {Promise<any>} - The promise with the result
   */
  async getLibrary(
    sectionId: number,
    optionalParams: { includeDetails?: IncludeDetails } = {},
  ): Promise<any> {
    const { includeDetails } = optionalParams;
    if (sectionId === undefined) {
      throw new Error('The following parameter is required: sectionId, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/library/sections/{sectionId}';
    urlEndpoint = urlEndpoint.replace(
      '{sectionId}',
      serializePath('simple', false, sectionId, undefined),
    );
    if (includeDetails) {
      queryParams.push(serializeQuery('form', true, 'includeDetails', includeDetails));
    }
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
   * @summary Delete Library Section
   * @description Delate a library using a specific section

   * @param sectionId the Id of the library to query
   * @returns {Promise<any>} - The promise with the result
   */
  async deleteLibrary(sectionId: number): Promise<any> {
    if (sectionId === undefined) {
      throw new Error('The following parameter is required: sectionId, cannot be empty or blank');
    }
    let urlEndpoint = '/library/sections/{sectionId}';
    urlEndpoint = urlEndpoint.replace(
      '{sectionId}',
      serializePath('simple', false, sectionId, undefined),
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
   * @summary Get Library Items
   * @description This endpoint will return a list of library items filtered by the filter and type provided


   * @param sectionId the Id of the library to query
   * @param optionalParams - Optional parameters
   * @param optionalParams.type_ - item type
   * @param optionalParams.filter - the filter parameter
   * @returns {Promise<any>} - The promise with the result
   */
  async getLibraryItems(
    sectionId: number,
    optionalParams: { type_?: number; filter?: string } = {},
  ): Promise<any> {
    const { type_, filter } = optionalParams;
    if (sectionId === undefined) {
      throw new Error('The following parameter is required: sectionId, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/library/sections/{sectionId}/all';
    urlEndpoint = urlEndpoint.replace(
      '{sectionId}',
      serializePath('simple', false, sectionId, undefined),
    );
    if (type_) {
      queryParams.push(serializeQuery('form', true, 'type', type_));
    }
    if (filter) {
      queryParams.push(serializeQuery('form', true, 'filter', filter));
    }
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
   * @summary Refresh Library
   * @description This endpoint Refreshes the library.


   * @param sectionId the Id of the library to refresh
   * @returns {Promise<any>} - The promise with the result
   */
  async refreshLibrary(sectionId: number): Promise<any> {
    if (sectionId === undefined) {
      throw new Error('The following parameter is required: sectionId, cannot be empty or blank');
    }
    let urlEndpoint = '/library/sections/{sectionId}/refresh';
    urlEndpoint = urlEndpoint.replace(
      '{sectionId}',
      serializePath('simple', false, sectionId, undefined),
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
   * @summary Get Latest Library Items
   * @description This endpoint will return a list of the latest library items filtered by the filter and type provided


   * @param sectionId the Id of the library to query
   * @param type_ item type
   * @param optionalParams - Optional parameters
   * @param optionalParams.filter - the filter parameter
   * @returns {Promise<any>} - The promise with the result
   */
  async getLatestLibraryItems(
    sectionId: number,
    type_: number,
    optionalParams: { filter?: string } = {},
  ): Promise<any> {
    const { filter } = optionalParams;
    if (sectionId === undefined || type_ === undefined) {
      throw new Error(
        'The following are required parameters: sectionId,type_, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/library/sections/{sectionId}/latest';
    urlEndpoint = urlEndpoint.replace(
      '{sectionId}',
      serializePath('simple', false, sectionId, undefined),
    );
    if (type_) {
      queryParams.push(serializeQuery('form', true, 'type', type_));
    }
    if (filter) {
      queryParams.push(serializeQuery('form', true, 'filter', filter));
    }
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
   * @summary Get Common Library Items
   * @description Represents a "Common" item. It contains only the common attributes of the items selected by the provided filter


   * @param sectionId the Id of the library to query
   * @param type_ item type
   * @param optionalParams - Optional parameters
   * @param optionalParams.filter - the filter parameter
   * @returns {Promise<any>} - The promise with the result
   */
  async getCommonLibraryItems(
    sectionId: number,
    type_: number,
    optionalParams: { filter?: string } = {},
  ): Promise<any> {
    const { filter } = optionalParams;
    if (sectionId === undefined || type_ === undefined) {
      throw new Error(
        'The following are required parameters: sectionId,type_, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/library/sections/{sectionId}/common';
    urlEndpoint = urlEndpoint.replace(
      '{sectionId}',
      serializePath('simple', false, sectionId, undefined),
    );
    if (type_) {
      queryParams.push(serializeQuery('form', true, 'type', type_));
    }
    if (filter) {
      queryParams.push(serializeQuery('form', true, 'filter', filter));
    }
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
   * @summary Get Items Metadata
   * @description This endpoint will return the metadata of a library item specified with the ratingKey.


   * @param ratingKey the id of the library item to return the children of.
   * @returns {Promise<any>} - The promise with the result
   */
  async getMetadata(ratingKey: number): Promise<any> {
    if (ratingKey === undefined) {
      throw new Error('The following parameter is required: ratingKey, cannot be empty or blank');
    }
    let urlEndpoint = '/library/metadata/{ratingKey}';
    urlEndpoint = urlEndpoint.replace(
      '{ratingKey}',
      serializePath('simple', false, ratingKey, undefined),
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
   * @summary Get Items Children
   * @description This endpoint will return the children of of a library item specified with the ratingKey.


   * @param ratingKey the id of the library item to return the children of.
   * @returns {Promise<any>} - The promise with the result
   */
  async getMetadataChildren(ratingKey: number): Promise<any> {
    if (ratingKey === undefined) {
      throw new Error('The following parameter is required: ratingKey, cannot be empty or blank');
    }
    let urlEndpoint = '/library/metadata/{ratingKey}/children';
    urlEndpoint = urlEndpoint.replace(
      '{ratingKey}',
      serializePath('simple', false, ratingKey, undefined),
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
   * @summary Get On Deck
   * @description This endpoint will return the on deck content.


   * @returns {Promise<Response<GetOnDeckResponse>>} - The promise with the result
   */
  async getOnDeck(): Promise<Response<GetOnDeckResponse>> {
    const urlEndpoint = '/library/onDeck';
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
}

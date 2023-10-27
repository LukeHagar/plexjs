import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { GetSearchResultsResponse } from './models/GetSearchResultsResponse';

import { serializeQuery } from '../../http/QuerySerializer';

export class SearchService extends BaseService {
  /**
   * @summary Perform a search
   * @description This endpoint performs a search across all library sections, or a single section, and returns matches as hubs, split up by type. It performs spell checking, looks for partial matches, and orders the hubs based on quality of results. In addition, based on matches, it will return other related matches (e.g. for a genre match, it may return movies in that genre, or for an actor match, movies with that actor).

In the response's items, the following extra attributes are returned to further describe or disambiguate the result:

- `reason`: The reason for the result, if not because of a direct search term match; can be either:
  - `section`: There are multiple identical results from different sections.
  - `originalTitle`: There was a search term match from the original title field (sometimes those can be very different or in a foreign language).
  - `<hub identifier>`: If the reason for the result is due to a result in another hub, the source hub identifier is returned. For example, if the search is for "dylan" then Bob Dylan may be returned as an artist result, an a few of his albums returned as album results with a reason code of `artist` (the identifier of that particular hub). Or if the search is for "arnold", there might be movie results returned with a reason of `actor`
- `reasonTitle`: The string associated with the reason code. For a section reason, it'll be the section name; For a hub identifier, it'll be a string associated with the match (e.g. `Arnold Schwarzenegger` for movies which were returned because the search was for "arnold").
- `reasonID`: The ID of the item associated with the reason for the result. This might be a section ID, a tag ID, an artist ID, or a show ID.

This request is intended to be very fast, and called as the user types.


   * @param query The query term
   * @param optionalParams - Optional parameters
   * @param optionalParams.sectionId - This gives context to the search, and can result in re-ordering of search result hubs
   * @param optionalParams.limit - The number of items to return per hub
   * @returns {Promise<any>} - The promise with the result
   */
  async performSearch(
    query: string,
    optionalParams: { sectionId?: number; limit?: number } = {},
  ): Promise<any> {
    const { sectionId, limit } = optionalParams;
    if (query === undefined) {
      throw new Error('The following parameter is required: query, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (query) {
      queryParams.push(serializeQuery('form', true, 'query', query));
    }
    if (sectionId) {
      queryParams.push(serializeQuery('form', true, 'sectionId', sectionId));
    }
    if (limit) {
      queryParams.push(serializeQuery('form', true, 'limit', limit));
    }
    const urlEndpoint = '/hubs/search';
    const urlParams = queryParams.length > 0 ? `?${encodeURI(queryParams.join('&'))}` : '';
    const finalUrl = `${this.baseUrl + urlEndpoint}${urlParams}`;
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
   * @summary Perform a voice search
   * @description This endpoint performs a search specifically tailored towards voice or other imprecise input which may work badly with the substring and spell-checking heuristics used by the `/hubs/search` endpoint. 
It uses a [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) heuristic to search titles, and as such is much slower than the other search endpoint. 
Whenever possible, clients should limit the search to the appropriate type. 
Results, as well as their containing per-type hubs, contain a `distance` attribute which can be used to judge result quality.


   * @param query The query term
   * @param optionalParams - Optional parameters
   * @param optionalParams.sectionId - This gives context to the search, and can result in re-ordering of search result hubs
   * @param optionalParams.limit - The number of items to return per hub
   * @returns {Promise<any>} - The promise with the result
   */
  async performVoiceSearch(
    query: string,
    optionalParams: { sectionId?: number; limit?: number } = {},
  ): Promise<any> {
    const { sectionId, limit } = optionalParams;
    if (query === undefined) {
      throw new Error('The following parameter is required: query, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (query) {
      queryParams.push(serializeQuery('form', true, 'query', query));
    }
    if (sectionId) {
      queryParams.push(serializeQuery('form', true, 'sectionId', sectionId));
    }
    if (limit) {
      queryParams.push(serializeQuery('form', true, 'limit', limit));
    }
    const urlEndpoint = '/hubs/search/voice';
    const urlParams = queryParams.length > 0 ? `?${encodeURI(queryParams.join('&'))}` : '';
    const finalUrl = `${this.baseUrl + urlEndpoint}${urlParams}`;
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
   * @summary Get Search Results
   * @description This will search the database for the string provided.

   * @param query The search query string to use
   * @returns {Promise<Response<GetSearchResultsResponse>>} - The promise with the result
   */
  async getSearchResults(query: string): Promise<Response<GetSearchResultsResponse>> {
    if (query === undefined) {
      throw new Error('The following parameter is required: query, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (query) {
      queryParams.push(serializeQuery('form', true, 'query', query));
    }
    const urlEndpoint = '/search';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
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

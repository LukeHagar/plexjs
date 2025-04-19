/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { libraryDeleteLibrary } from "../funcs/libraryDeleteLibrary.js";
import { libraryGetActorsLibrary } from "../funcs/libraryGetActorsLibrary.js";
import { libraryGetAllLibraries } from "../funcs/libraryGetAllLibraries.js";
import { libraryGetAllMediaLibrary } from "../funcs/libraryGetAllMediaLibrary.js";
import { libraryGetCountriesLibrary } from "../funcs/libraryGetCountriesLibrary.js";
import { libraryGetFileHash } from "../funcs/libraryGetFileHash.js";
import { libraryGetGenresLibrary } from "../funcs/libraryGetGenresLibrary.js";
import { libraryGetLibraryDetails } from "../funcs/libraryGetLibraryDetails.js";
import { libraryGetLibraryItems } from "../funcs/libraryGetLibraryItems.js";
import { libraryGetMediaArts } from "../funcs/libraryGetMediaArts.js";
import { libraryGetMediaMetaData } from "../funcs/libraryGetMediaMetaData.js";
import { libraryGetMediaPosters } from "../funcs/libraryGetMediaPosters.js";
import { libraryGetMetadataChildren } from "../funcs/libraryGetMetadataChildren.js";
import { libraryGetRecentlyAddedLibrary } from "../funcs/libraryGetRecentlyAddedLibrary.js";
import { libraryGetRefreshLibraryMetadata } from "../funcs/libraryGetRefreshLibraryMetadata.js";
import { libraryGetSearchAllLibraries } from "../funcs/libraryGetSearchAllLibraries.js";
import { libraryGetSearchLibrary } from "../funcs/libraryGetSearchLibrary.js";
import { libraryGetTopWatchedContent } from "../funcs/libraryGetTopWatchedContent.js";
import { libraryPostMediaArts } from "../funcs/libraryPostMediaArts.js";
import { libraryPostMediaPoster } from "../funcs/libraryPostMediaPoster.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Library extends ClientSDK {
  /**
   * Get Hash Value
   *
   * @remarks
   * This resource returns hash values for local files
   */
  async getFileHash(
    url: string,
    type?: number | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetFileHashResponse> {
    return unwrapAsync(libraryGetFileHash(
      this,
      url,
      type,
      options,
    ));
  }

  /**
   * Get Recently Added
   *
   * @remarks
   * This endpoint will return the recently added content.
   */
  async getRecentlyAddedLibrary(
    request: operations.GetRecentlyAddedLibraryRequest,
    options?: RequestOptions,
  ): Promise<operations.GetRecentlyAddedLibraryResponse> {
    return unwrapAsync(libraryGetRecentlyAddedLibrary(
      this,
      request,
      options,
    ));
  }

  /**
   * Get All Libraries
   *
   * @remarks
   * A library section (commonly referred to as just a library) is a collection of media.
   * Libraries are typed, and depending on their type provide either a flat or a hierarchical view of the media.
   * For example, a music library has an artist > albums > tracks structure, whereas a movie library is flat.
   *
   * Libraries have features beyond just being a collection of media; for starters, they include information about supported types, filters and sorts.
   * This allows a client to provide a rich interface around the media (e.g. allow sorting movies by release year).
   */
  async getAllLibraries(
    options?: RequestOptions,
  ): Promise<operations.GetAllLibrariesResponse> {
    return unwrapAsync(libraryGetAllLibraries(
      this,
      options,
    ));
  }

  /**
   * Get Library Details
   *
   * @remarks
   * ## Library Details Endpoint
   *
   * This endpoint provides comprehensive details about the library, focusing on organizational aspects rather than the content itself.
   *
   * The details include:
   *
   * ### Directories
   * Organized into three categories:
   *
   * - **Primary Directories**:
   *   - Used in some clients for quick access to media subsets (e.g., "All", "On Deck").
   *   - Most can be replicated via media queries.
   *   - Customizable by users.
   *
   * - **Secondary Directories**:
   *   - Marked with `secondary="1"`.
   *   - Used in older clients for structured navigation.
   *
   * - **Special Directories**:
   *   - Includes a "By Folder" entry for filesystem-based browsing.
   *   - Contains an obsolete `search="1"` entry for on-the-fly search dialog creation.
   *
   * ### Types
   * Each type in the library comes with a set of filters and sorts, aiding in building dynamic media controls:
   *
   * - **Type Object Attributes**:
   *   - `key`: Endpoint for the media list of this type.
   *   - `type`: Metadata type (if standard Plex type).
   *   - `title`: Title for this content type (e.g., "Movies").
   *
   * - **Filter Objects**:
   *   - Subset of the media query language.
   *   - Attributes include `filter` (name), `filterType` (data type), `key` (endpoint for value range), and `title`.
   *
   * - **Sort Objects**:
   *   - Description of sort fields.
   *   - Attributes include `defaultDirection` (asc/desc), `descKey` and `key` (sort parameters), and `title`.
   *
   * > **Note**: Filters and sorts are optional; without them, no filtering controls are rendered.
   */
  async getLibraryDetails(
    sectionKey: number,
    includeDetails?: operations.IncludeDetails | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetLibraryDetailsResponse> {
    return unwrapAsync(libraryGetLibraryDetails(
      this,
      sectionKey,
      includeDetails,
      options,
    ));
  }

  /**
   * Delete Library Section
   *
   * @remarks
   * Delete a library using a specific section id
   */
  async deleteLibrary(
    sectionKey: number,
    options?: RequestOptions,
  ): Promise<operations.DeleteLibraryResponse> {
    return unwrapAsync(libraryDeleteLibrary(
      this,
      sectionKey,
      options,
    ));
  }

  /**
   * Get Library Items
   *
   * @remarks
   * Fetches details from a specific section of the library identified by a section key and a tag. The tag parameter accepts the following values:
   * - `all`: All items in the section.
   * - `unwatched`: Items that have not been played.
   * - `newest`: Items that are recently released.
   * - `recentlyAdded`: Items that are recently added to the library.
   * - `recentlyViewed`: Items that were recently viewed.
   * - `onDeck`: Items to continue watching.
   * - `collection`: Items categorized by collection.
   * - `edition`: Items categorized by edition.
   * - `genre`: Items categorized by genre.
   * - `year`: Items categorized by year of release.
   * - `decade`: Items categorized by decade.
   * - `director`: Items categorized by director.
   * - `actor`: Items categorized by starring actor.
   * - `country`: Items categorized by country of origin.
   * - `contentRating`: Items categorized by content rating.
   * - `rating`: Items categorized by rating.
   * - `resolution`: Items categorized by resolution.
   * - `firstCharacter`: Items categorized by the first letter.
   * - `folder`: Items categorized by folder.
   * - `albums`: Items categorized by album.
   */
  async getLibraryItems(
    request: operations.GetLibraryItemsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetLibraryItemsResponse> {
    return unwrapAsync(libraryGetLibraryItems(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all media of library
   *
   * @remarks
   * Retrieves a list of all general media data for this library.
   */
  async getAllMediaLibrary(
    request: operations.GetAllMediaLibraryRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAllMediaLibraryResponse> {
    return unwrapAsync(libraryGetAllMediaLibrary(
      this,
      request,
      options,
    ));
  }

  /**
   * Refresh Metadata Of The Library
   *
   * @remarks
   * This endpoint Refreshes all the Metadata of the library.
   */
  async getRefreshLibraryMetadata(
    sectionKey: number,
    force?: operations.Force | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetRefreshLibraryMetadataResponse> {
    return unwrapAsync(libraryGetRefreshLibraryMetadata(
      this,
      sectionKey,
      force,
      options,
    ));
  }

  /**
   * Search Library
   *
   * @remarks
   * Search for content within a specific section of the library.
   *
   * ### Types
   * Each type in the library comes with a set of filters and sorts, aiding in building dynamic media controls:
   *
   * - **Type Object Attributes**:
   *   - `type`: Metadata type (if standard Plex type).
   *   - `title`: Title for this content type (e.g., "Movies").
   *
   * - **Filter Objects**:
   *   - Subset of the media query language.
   *   - Attributes include `filter` (name), `filterType` (data type), `key` (endpoint for value range), and `title`.
   *
   * - **Sort Objects**:
   *   - Description of sort fields.
   *   - Attributes include `defaultDirection` (asc/desc), `descKey` and `key` (sort parameters), and `title`.
   *
   * > **Note**: Filters and sorts are optional; without them, no filtering controls are rendered.
   */
  async getSearchLibrary(
    sectionKey: number,
    type: operations.GetSearchLibraryQueryParamTypeOpen,
    options?: RequestOptions,
  ): Promise<operations.GetSearchLibraryResponse> {
    return unwrapAsync(libraryGetSearchLibrary(
      this,
      sectionKey,
      type,
      options,
    ));
  }

  /**
   * Get Genres of library media
   *
   * @remarks
   * Retrieves a list of all the genres that are found for the media in this library.
   */
  async getGenresLibrary(
    sectionKey: number,
    type: operations.GetGenresLibraryQueryParamTypeOpen,
    options?: RequestOptions,
  ): Promise<operations.GetGenresLibraryResponse> {
    return unwrapAsync(libraryGetGenresLibrary(
      this,
      sectionKey,
      type,
      options,
    ));
  }

  /**
   * Get Countries of library media
   *
   * @remarks
   * Retrieves a list of all the countries that are found for the media in this library.
   */
  async getCountriesLibrary(
    sectionKey: number,
    type: operations.GetCountriesLibraryQueryParamTypeOpen,
    options?: RequestOptions,
  ): Promise<operations.GetCountriesLibraryResponse> {
    return unwrapAsync(libraryGetCountriesLibrary(
      this,
      sectionKey,
      type,
      options,
    ));
  }

  /**
   * Get Actors of library media
   *
   * @remarks
   * Retrieves a list of all the actors that are found for the media in this library.
   */
  async getActorsLibrary(
    sectionKey: number,
    type: operations.GetActorsLibraryQueryParamTypeOpen,
    options?: RequestOptions,
  ): Promise<operations.GetActorsLibraryResponse> {
    return unwrapAsync(libraryGetActorsLibrary(
      this,
      sectionKey,
      type,
      options,
    ));
  }

  /**
   * Search All Libraries
   *
   * @remarks
   * Search the provided query across all library sections, or a single section, and return matches as hubs, split up by type.
   */
  async getSearchAllLibraries(
    request: operations.GetSearchAllLibrariesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetSearchAllLibrariesResponse> {
    return unwrapAsync(libraryGetSearchAllLibraries(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Media Metadata
   *
   * @remarks
   * This endpoint will return all the (meta)data of a library item specified with by the ratingKey.
   */
  async getMediaMetaData(
    request: operations.GetMediaMetaDataRequest,
    options?: RequestOptions,
  ): Promise<operations.GetMediaMetaDataResponse> {
    return unwrapAsync(libraryGetMediaMetaData(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Media Background Artwork
   *
   * @remarks
   * Returns the background artwork for a library item.
   */
  async getMediaArts(
    ratingKey: number,
    options?: RequestOptions,
  ): Promise<operations.GetMediaArtsResponse> {
    return unwrapAsync(libraryGetMediaArts(
      this,
      ratingKey,
      options,
    ));
  }

  /**
   * Upload Media Background Artwork
   *
   * @remarks
   * Uploads an image to use as the background artwork for a library item, either from a local file or a remote URL
   */
  async postMediaArts(
    ratingKey: number,
    requestBody?:
      | ReadableStream<Uint8Array>
      | Blob
      | ArrayBuffer
      | Uint8Array
      | undefined,
    url?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostMediaArtsResponse> {
    return unwrapAsync(libraryPostMediaArts(
      this,
      ratingKey,
      requestBody,
      url,
      options,
    ));
  }

  /**
   * Get Media Posters
   *
   * @remarks
   * Returns the available posters for a library item.
   */
  async getMediaPosters(
    ratingKey: number,
    options?: RequestOptions,
  ): Promise<operations.GetMediaPostersResponse> {
    return unwrapAsync(libraryGetMediaPosters(
      this,
      ratingKey,
      options,
    ));
  }

  /**
   * Upload Media Poster
   *
   * @remarks
   * Uploads a poster to a library item, either from a local file or a remote URL
   */
  async postMediaPoster(
    ratingKey: number,
    requestBody?:
      | ReadableStream<Uint8Array>
      | Blob
      | ArrayBuffer
      | Uint8Array
      | undefined,
    url?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostMediaPosterResponse> {
    return unwrapAsync(libraryPostMediaPoster(
      this,
      ratingKey,
      requestBody,
      url,
      options,
    ));
  }

  /**
   * Get Items Children
   *
   * @remarks
   * This endpoint will return the children of of a library item specified with the ratingKey.
   */
  async getMetadataChildren(
    ratingKey: number,
    includeElements?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetMetadataChildrenResponse> {
    return unwrapAsync(libraryGetMetadataChildren(
      this,
      ratingKey,
      includeElements,
      options,
    ));
  }

  /**
   * Get Top Watched Content
   *
   * @remarks
   * This endpoint will return the top watched content from libraries of a certain type
   */
  async getTopWatchedContent(
    type: operations.GetTopWatchedContentQueryParamTypeOpen,
    includeGuids?: number | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetTopWatchedContentResponse> {
    return unwrapAsync(libraryGetTopWatchedContent(
      this,
      type,
      includeGuids,
      options,
    ));
  }
}

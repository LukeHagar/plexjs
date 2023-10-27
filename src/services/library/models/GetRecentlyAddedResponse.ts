export interface GetRecentlyAddedResponse {
  MediaContainer?: MediaContainer;
}
interface MediaContainer {
  size?: number;
  allowSync?: boolean;
  identifier?: string;
  mediaTagPrefix?: string;
  mediaTagVersion?: number;
  mixedParents?: boolean;
  Metadata?: {
    allowSync?: boolean;
    librarySectionID?: number;
    librarySectionTitle?: string;
    librarySectionUUID?: string;
    ratingKey?: number;
    key?: string;
    guid?: string;
    studio?: string;
    title?: string;
    contentRating?: string;
    summary?: string;
    rating?: number;
    audienceRating?: number;
    year?: number;
    tagline?: string;
    thumb?: string;
    art?: string;
    duration?: number;
    originallyAvailableAt?: string;
    addedAt?: number;
    updatedAt?: number;
    audienceRatingImage?: string;
    chapterSource?: string;
    primaryExtraKey?: string;
    ratingImage?: string;
    Media?: {
      id?: number;
      duration?: number;
      bitrate?: number;
      width?: number;
      height?: number;
      aspectRatio?: number;
      audioChannels?: number;
      audioCodec?: string;
      videoCodec?: string;
      videoResolution?: number;
      container?: string;
      videoFrameRate?: string;
      optimizedForStreaming?: number;
      has64bitOffsets?: boolean;
      videoProfile?: string;
      Part?: {
        id?: number;
        key?: string;
        duration?: number;
        file?: string;
        size?: number;
        container?: string;
        has64bitOffsets?: boolean;
        hasThumbnail?: number;
        optimizedForStreaming?: boolean;
        videoProfile?: string;
      }[];
    }[];
    Genre?: {
      tag?: string;
    }[];
    Director?: {
      tag?: string;
    }[];
    Writer?: {
      tag?: string;
    }[];
    Country?: {
      tag?: string;
    }[];
    Role?: {
      tag?: string;
    }[];
    type_?: string;
  }[];
}

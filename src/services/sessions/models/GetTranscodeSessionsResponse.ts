export interface GetTranscodeSessionsResponse {
  MediaContainer?: MediaContainer;
}
interface MediaContainer {
  size?: number;
  TranscodeSession?: {
    key?: string;
    throttled?: boolean;
    complete?: boolean;
    progress?: number;
    size?: number;
    speed?: number;
    error?: boolean;
    duration?: number;
    context?: string;
    sourceVideoCodec?: string;
    sourceAudioCodec?: string;
    videoDecision?: string;
    audioDecision?: string;
    protocol?: string;
    container?: string;
    videoCodec?: string;
    audioCodec?: string;
    audioChannels?: number;
    transcodeHwRequested?: boolean;
    timeStamp?: number;
    maxOffsetAvailable?: number;
    minOffsetAvailable?: number;
  }[];
}

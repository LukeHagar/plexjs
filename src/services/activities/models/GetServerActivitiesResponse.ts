export interface GetServerActivitiesResponse {
  MediaContainer?: MediaContainer;
}
interface MediaContainer {
  size?: number;
  Activity?: {
    uuid?: string;
    cancellable?: boolean;
    userID?: number;
    title?: string;
    subtitle?: string;
    progress?: number;
    Context?: Context;
    type_?: string;
  }[];
}
interface Context {
  librarySectionID?: string;
}

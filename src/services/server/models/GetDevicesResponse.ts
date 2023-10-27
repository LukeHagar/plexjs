export interface GetDevicesResponse {
  MediaContainer?: MediaContainer;
}
interface MediaContainer {
  size?: number;
  identifier?: string;
  Device?: {
    id?: number;
    name?: string;
    platform?: string;
    clientIdentifier?: string;
    createdAt?: number;
  }[];
}

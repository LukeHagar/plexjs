export interface GetServerIdentityResponse {
  MediaContainer?: MediaContainer;
}
interface MediaContainer {
  size?: number;
  claimed?: boolean;
  machineIdentifier?: string;
  version?: string;
}

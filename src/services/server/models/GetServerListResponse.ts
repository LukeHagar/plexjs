export interface GetServerListResponse {
  MediaContainer?: MediaContainer;
}
interface MediaContainer {
  size?: number;
  Server?: {
    name?: string;
    host?: string;
    address?: string;
    port?: number;
    machineIdentifier?: string;
    version?: string;
  }[];
}

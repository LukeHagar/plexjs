export type GetAvailableClientsResponse = {
  MediaContainer?: MediaContainer;
}[];

interface MediaContainer {
  size?: number;
  Server?: {
    name?: string;
    host?: string;
    address?: string;
    port?: number;
    machineIdentifier?: string;
    version?: string;
    protocol?: string;
    product?: string;
    deviceClass?: string;
    protocolVersion?: number;
    protocolCapabilities?: string;
  }[];
}

import { Environment } from './http/Environment';
import HTTPLibrary from './http/HTTPLibrary';
import { Headers } from './http/HTTPClient';

export default class BaseService {
  public baseUrl: string = Environment.DEFAULT;

  public httpClient = new HTTPLibrary();

  private apiKey: string = '';

  private apiKeyHeader: string = 'X-Plex-Token';

  setApiKey(key: string, header: string = 'X-Plex-Token'): void {
    this.apiKey = key;
    this.apiKeyHeader = header;
  }

  getAuthorizationHeader(): Headers {
    const apiKeyAuth = { [this.apiKeyHeader]: this.apiKey };

    return { ...apiKeyAuth };
  }

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  constructor(apiKey: string = '', apiKeyHeader: string = 'X-Plex-Token') {
    this.setApiKey(apiKey, apiKeyHeader);
  }

  static patternMatching(value: string, pattern: string, variableName: string): string {
    if (!value) {
      throw new Error(`${variableName} cannot be null or undefined`);
    }
    if (!value.match(new RegExp(pattern))) {
      throw new Error(`Invalid value for ${variableName}: must match ${pattern}`);
    }
    return value;
  }

  static urlEncode = (input: { [key: string]: any }): string =>
    Object.keys(input)
      .map((key) => `${key}=${encodeURIComponent(input[key])}`)
      .join('&');
}

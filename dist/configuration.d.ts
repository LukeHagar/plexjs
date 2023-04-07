import { IAxiosRetryConfig } from "axios-retry";
export interface ConfigurationParameters {
    baseurl?: string;
    clientId?: string;
    clientSecret?: string;
    accessToken?: string;
    tokenUrl?: string;
}
export interface Configuration {
    activeenvironment?: string;
    authtype?: string;
    customexporttemplatespath?: string;
    customsearchtemplatespath?: string;
    debug?: boolean;
    environments?: {
        [key: string]: Environment;
    };
}
export interface Environment {
    baseurl: string;
    pat: Pat;
    tenanturl: string;
}
export interface Pat {
    clientid: string;
    clientsecret: string;
}
export declare class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    /**
     * parameter for clientId
     *
     * @type {string}
     * @memberof Configuration
     */
    clientId?: string;
    /**
     * parameter for clientSecret
     *
     * @type {string}
     * @memberof Configuration
     */
    clientSecret?: string;
    /**
     * parameter for clientSecret
     *
     * @type {string}
     * @memberof Configuration
     */
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
      * parameter for clientId
      *
      * @type {string}
      * @memberof Configuration
      */
    tokenUrl?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePathBeta?: string;
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePathV3?: string;
    /**
    * override base path
    *
    * @type {string}
    * @memberof Configuration
    */
    basePathV2?: string;
    /**
    * override base path
    *
    * @type {string}
    * @memberof Configuration
    */
    basePathCC?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;
    /**
     * axios retry configuration
     *
     * @type {IAxiosRetryConfig}
     * @memberof Configuration
     */
    retriesConfig?: IAxiosRetryConfig;
    constructor(param?: ConfigurationParameters);
    private getParams;
    private getAccessToken;
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime: string): boolean;
}

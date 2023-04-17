/* tslint:disable */
/* eslint-disable */
/**
 * Plex-API
 * An Open API Spec for interacting with Plex.tv and Plex Servers
 *
 * The version of the OpenAPI document: 0.0.3
 * Contact: Lukeslakemail@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
// Some imports not used depending on template conditions
// @ts-ignore
import globalAxios from 'axios';
export const BASE_PATH = "http://10.10.10.47:32400".replace(/\/+$/, "");
/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    basePath;
    axios;
    configuration;
    constructor(configuration, basePath = BASE_PATH, axios = globalAxios) {
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    field;
    name = "RequiredError";
    constructor(field, msg) {
        super(msg);
        this.field = field;
    }
}
//# sourceMappingURL=base.js.map
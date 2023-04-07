export interface PaginationParams {
    /**
     * Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
     * @type {number}
     * @memberof AccountsApiListAccounts
     */
    limit?: number;
    /**
     * Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
     * @type {number}
     * @memberof AccountsApiListAccounts
     */
    offset?: number;
    /**
     * If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
     * @type {boolean}
     * @memberof AccountsApiListAccounts
     */
    count?: boolean;
    /**
     * Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **identityId**: *eq*  **name**: *eq, in*  **nativeIdentity**: *eq, in*  **sourceId**: *eq, in*  **uncorrelated**: *eq*
     * @type {string}
     * @memberof AccountsApiListAccounts
     */
    filters?: string;
}
export interface AxiosResponse<T = any, D = any> {
    data: T;
    status: number;
    statusText: string;
    request?: any;
    headers: AxiosResponseHeaders;
}
export declare type AxiosResponseHeaders = Record<string, string> & {
    "set-cookie"?: string[];
};
export declare class Paginator {
    static paginate<T, TResult, A extends PaginationParams>(thisArg: T, callbackFn: (this: T, args: A) => Promise<AxiosResponse<TResult[], any>>, args?: A, increment?: number): Promise<AxiosResponse<TResult[], any>>;
}

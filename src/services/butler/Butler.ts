import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { GetButlerTasksResponse } from './models/GetButlerTasksResponse';
import { TaskName } from './models/TaskName';

import { serializePath } from '../../http/QuerySerializer';

export class ButlerService extends BaseService {
  /**
   * @summary Get Butler tasks
   * @description Returns a list of butler tasks

   * @returns {Promise<Response<GetButlerTasksResponse>>} - The promise with the result
   */
  async getButlerTasks(): Promise<Response<GetButlerTasksResponse>> {
    const urlEndpoint = '/butler';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Start all Butler tasks
   * @description This endpoint will attempt to start all Butler tasks that are enabled in the settings. Butler tasks normally run automatically during a time window configured on the server's Settings page but can be manually started using this endpoint. Tasks will run with the following criteria:
1. Any tasks not scheduled to run on the current day will be skipped.
2. If a task is configured to run at a random time during the configured window and we are outside that window, the task will start immediately.
3. If a task is configured to run at a random time during the configured window and we are within that window, the task will be scheduled at a random time within the window.
4. If we are outside the configured window, the task will start immediately.


   * @returns {Promise<any>} - The promise with the result
   */
  async startAllTasks(): Promise<any> {
    const urlEndpoint = '/butler';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Stop all Butler tasks
   * @description This endpoint will stop all currently running tasks and remove any scheduled tasks from the queue.


   * @returns {Promise<any>} - The promise with the result
   */
  async stopAllTasks(): Promise<any> {
    const urlEndpoint = '/butler';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Start a single Butler task
   * @description This endpoint will attempt to start a single Butler task that is enabled in the settings. Butler tasks normally run automatically during a time window configured on the server's Settings page but can be manually started using this endpoint. Tasks will run with the following criteria:
1. Any tasks not scheduled to run on the current day will be skipped.
2. If a task is configured to run at a random time during the configured window and we are outside that window, the task will start immediately.
3. If a task is configured to run at a random time during the configured window and we are within that window, the task will be scheduled at a random time within the window.
4. If we are outside the configured window, the task will start immediately.


   * @param taskName the name of the task to be started.
   * @returns {Promise<any>} - The promise with the result
   */
  async startTask(taskName: TaskName): Promise<any> {
    if (taskName === undefined) {
      throw new Error('The following parameter is required: taskName, cannot be empty or blank');
    }
    let urlEndpoint = '/butler/{taskName}';
    urlEndpoint = urlEndpoint.replace(
      '{taskName}',
      serializePath('simple', false, taskName, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Stop a single Butler task
   * @description This endpoint will stop a currently running task by name, or remove it from the list of scheduled tasks if it exists. See the section above for a list of task names for this endpoint.


   * @param taskName The name of the task to be started.
   * @returns {Promise<any>} - The promise with the result
   */
  async stopTask(taskName: TaskName): Promise<any> {
    if (taskName === undefined) {
      throw new Error('The following parameter is required: taskName, cannot be empty or blank');
    }
    let urlEndpoint = '/butler/{taskName}';
    urlEndpoint = urlEndpoint.replace(
      '{taskName}',
      serializePath('simple', false, taskName, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }
}

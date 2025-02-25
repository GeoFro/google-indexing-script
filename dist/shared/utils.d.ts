/**
 * Executes tasks on items in batches and invokes a callback upon completion of each batch.
 * @param task The task function to be executed on each item.
 * @param items The array of items on which the task is to be executed.
 * @param batchSize The size of each batch.
 * @param onBatchComplete The callback function invoked upon completion of each batch.
 */
declare function batch(task: (url: string) => void, items: string[], batchSize: number, onBatchComplete: (batchIndex: number, batchCount: number) => void): Promise<void>;
/**
 * Fetches a resource from a URL with retry logic.
 * @param url The URL of the resource to fetch.
 * @param options The options for the fetch request.
 * @param retries The number of retry attempts (default is 5).
 * @returns A Promise resolving to the fetched response.
 * @throws Error when retries are exhausted or server error occurs.
 */
declare function fetchRetry(url: string, options: RequestInit, retries?: number): Promise<Response>;

export { batch, fetchRetry };

export { getAccessToken } from './shared/auth.js';
export { checkCustomUrls, checkSiteUrl, convertToFilePath, convertToHTTP, convertToHTTPS, convertToSCDomain, convertToSiteUrl, getEmojiForStatus, getPageIndexingStatus, getPublishMetadata, getSites, requestIndexing } from './shared/gsc.js';
export { getSitemapPages } from './shared/sitemap.js';
export { Status } from './shared/types.js';
export { batch, fetchRetry } from './shared/utils.js';

declare const QUOTA: {
    rpm: {
        retries: number;
        waitingTime: number;
    };
};
type IndexOptions = {
    client_email?: string;
    private_key?: string;
    path?: string;
    urls?: string[];
    quota?: {
        rpmRetry?: boolean;
    };
};
/**
 * Indexes the specified domain or site URL.
 * @param input - The domain or site URL to index.
 * @param options - (Optional) Additional options for indexing.
 * @throws Error if there are issues with input parameters or API operations
 */
declare const index: (input?: string, options?: IndexOptions) => Promise<void>;

export { type IndexOptions, QUOTA, index };

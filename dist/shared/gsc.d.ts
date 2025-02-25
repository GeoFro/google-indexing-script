import { Status } from './types.js';

/**
 * Converts a given input string to a valid Google Search Console site URL format.
 * @param input - The input string to be converted.
 * @returns The converted site URL (domain.com or https://domain.com/)
 */
declare function convertToSiteUrl(input: string): string;
/**
 * Converts a given file path to a formatted version suitable for use as a file name.
 * @param path - The url to be converted as a file name
 * @returns The converted file path
 */
declare function convertToFilePath(path: string): string;
/**
 * Converts an HTTP URL to a sc-domain URL format.
 * @param httpUrl The HTTP URL to be converted.
 * @returns The sc-domain formatted URL.
 */
declare function convertToSCDomain(httpUrl: string): string;
/**
 * Converts a domain to an HTTP URL.
 * @param domain The domain to be converted.
 * @returns The HTTP URL.
 */
declare function convertToHTTP(domain: string): string;
/**
 * Converts a domain to an HTTPS URL.
 * @param domain The domain to be converted.
 * @returns The HTTPS URL.
 */
declare function convertToHTTPS(domain: string): string;
/**
 * Retrieves a list of sites associated with the specified service account from the Google Webmasters API.
 * @param accessToken - The access token for authentication.
 * @returns An array containing the site URLs associated with the service account.
 */
declare function getSites(accessToken: string): Promise<(string | null | undefined)[]>;
/**
 * Checks if the site URL is valid and accessible by the service account.
 * @param accessToken - The access token for authentication.
 * @param siteUrl - The URL of the site to check.
 * @returns The corrected URL if found, otherwise the original site URL.
 * @throws Error if the site URL is invalid or inaccessible
 */
declare function checkSiteUrl(accessToken: string, siteUrl: string): Promise<string>;
/**
 * Checks if the given URLs are valid.
 * @param siteUrl - The URL of the site.
 * @param urls - The URLs to check.
 * @returns An array containing the corrected URLs if found, otherwise the original URLs
 */
declare function checkCustomUrls(siteUrl: string, urls: string[]): string[];
/**
 * Retrieves the indexing status of a page.
 * @param accessToken - The access token for authentication.
 * @param siteUrl - The URL of the site.
 * @param inspectionUrl - The URL of the page to inspect.
 * @returns A promise resolving to the status of indexing.
 */
declare function getPageIndexingStatus(accessToken: string, siteUrl: string, inspectionUrl: string): Promise<Status>;
/**
 * Retrieves an emoji representation corresponding to the given status.
 * @param status - The status for which to retrieve the emoji.
 * @returns The emoji representing the status.
 */
declare function getEmojiForStatus(status: Status): "✅" | "😵" | "👀" | "🔀" | "❓" | "🚦" | "❌";
/**
 * Retrieves metadata for publishing from the given URL.
 * @param accessToken - The access token for authentication.
 * @param url - The URL for which to retrieve metadata.
 * @param options - The options for the request.
 * @returns The status of the request.
 * @throws Error if there are issues with the request or rate limits are exceeded
 */
declare function getPublishMetadata(accessToken: string, url: string, options?: {
    retriesOnRateLimit: number;
}): Promise<number>;
/**
 * Requests indexing for the given URL.
 * @param accessToken - The access token for authentication.
 * @param url - The URL to be indexed.
 * @throws Error if there are issues with the request or rate limits are exceeded
 */
declare function requestIndexing(accessToken: string, url: string): Promise<void>;

export { checkCustomUrls, checkSiteUrl, convertToFilePath, convertToHTTP, convertToHTTPS, convertToSCDomain, convertToSiteUrl, getEmojiForStatus, getPageIndexingStatus, getPublishMetadata, getSites, requestIndexing };

/**
 * Retrieves a list of pages from all sitemaps associated with the specified site URL.
 * @param accessToken The access token for authentication.
 * @param siteUrl The URL of the site for which to retrieve the sitemap pages.
 * @returns An array containing the list of sitemaps and an array of unique page URLs extracted from those sitemaps.
 */
declare function getSitemapPages(accessToken: string, siteUrl: string): Promise<string[][]>;

export { getSitemapPages };

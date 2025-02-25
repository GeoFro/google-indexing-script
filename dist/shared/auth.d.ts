/**
 * Retrieves an access token for Google APIs using service account credentials.
 * @param client_email - The client email of the service account.
 * @param private_key - The private key of the service account.
 * @param customPath - (Optional) Custom path to the service account JSON file.
 * @returns The access token.
 * @throws Error if credentials are missing or invalid
 */
declare function getAccessToken(client_email?: string, private_key?: string, customPath?: string): Promise<string | null | undefined>;

export { getAccessToken };

import { google } from "googleapis";
import fs from "fs";
import path from "path";
import os from "os";

/**
 * Retrieves an access token for Google APIs using service account credentials.
 * @param client_email - The client email of the service account.
 * @param private_key - The private key of the service account.
 * @param customPath - (Optional) Custom path to the service account JSON file.
 * @returns The access token.
 * @throws Error if credentials are missing or invalid
 */
export async function getAccessToken(client_email?: string, private_key?: string, customPath?: string) {
  if (!client_email && !private_key) {
    const filePath = "service_account.json";
    const filePathFromHome = path.join(os.homedir(), ".gis", "service_account.json");
    const isFile = fs.existsSync(filePath);
    const isFileFromHome = fs.existsSync(filePathFromHome);
    const isCustomFile = !!customPath && fs.existsSync(customPath);

    if (!isFile && !isFileFromHome && !isCustomFile) {
      throw new Error(`${filePath} not found, please follow the instructions in README.md`);
    }

    const key = JSON.parse(
      fs.readFileSync(!!customPath && isCustomFile ? customPath : isFile ? filePath : filePathFromHome, "utf8")
    );
    client_email = key.client_email;
    private_key = key.private_key;
  } else {
    if (!client_email) {
      throw new Error("Missing client_email in service account credentials.");
    }

    if (!private_key) {
      throw new Error("Missing private_key in service account credentials.");
    }
  }

  const jwtClient = new google.auth.JWT(
    client_email,
    undefined,
    private_key,
    ["https://www.googleapis.com/auth/webmasters.readonly", "https://www.googleapis.com/auth/indexing"],
    undefined
  );

  const tokens = await jwtClient.authorize();
  return tokens.access_token;
}

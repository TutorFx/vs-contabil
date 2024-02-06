import type { sheets_v4 as SheetsApi } from "googleapis";
import { google } from "googleapis";

const config = useRuntimeConfig()

const GoogleConfigObject = {
  email: config.google.client ?? '<Google Email>',
  key: config.google.apiKey ?? '<Google Key>',
};

export const GoogleAuth = () => new google.auth.JWT(
  GoogleConfigObject.email,
  undefined,
  GoogleConfigObject.key?.replace(/\\n/g, "\n"),
  [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive",
  ]
);

export const GoogleSheets = () : SheetsApi.Sheets => google.sheets({ version: "v4", auth: GoogleAuth() });
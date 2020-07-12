import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute, updateConfigGenerator } from "./APIHeaders";

export const profileApi = {
    // Update Profile method
    patchProfileUpdate: (userInfo) => {
        return adalApiFetch(
            axios,
            "https://sswilbobraggins.crm.dynamics.com/api/v9.1/contacts("
            + userInfo.contactId + ")",
            updateConfigGenerator(userInfo))
      }
};

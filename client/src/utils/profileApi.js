import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute, updateConfigGenerator } from "./APIHeaders";

export const profileApi = {
    // Update Profile method
    patchProfileUpdate: (userInfo, contactId) => {
        console.log(userInfo)
        return adalApiFetch(
            axios,
            `${apiRoute}contacts(${contactId})`,
            updateConfigGenerator(userInfo))
      }
};

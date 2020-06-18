import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
 
export const adalConfig = {
  tenant: '58bf51ec-ca22-48d9-ad93-e9d44309b27a',
  clientId: 'efa93954-ca45-47d5-9f92-b628f05b4871',
  endpoints: {
    api: 'https://sswilbobraggins.crm.dynamics.com/',
  },
  cacheLocation: 'localStorage',
  redirectUri: 'http://localhost:3000'
};
 
export const authContext = new AuthenticationContext(adalConfig);
 
/**
 * 
 * @param axios fetch 
 * @param string url 
 * @param getConfig options 
 */
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);


export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);

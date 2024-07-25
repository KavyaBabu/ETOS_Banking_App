const API_URLS = {
  development: 'http://10.0.2.2:8000/',
  qa: '',
  production: '',
};

export const getApiUrl = (env) => {
  return API_URLS[env] || API_URLS.development;
};

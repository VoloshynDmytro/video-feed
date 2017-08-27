export const apiConfig = {
  url: process.env.API_URL,
  path(path) {
    return [this.url, path].join('/');
  },
};

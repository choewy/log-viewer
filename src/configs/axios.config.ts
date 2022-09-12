export class AxiosConfig {
  get baseURL() {
    return process.env.REACT_APP_API_BASE_URL;
  }
}

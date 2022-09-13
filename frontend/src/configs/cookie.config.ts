export class CookieConfig {
  get keys() {
    return {
      accessToken: process.env.REACT_APP_COOKIE_ACCESS_TOKEN_KEY,
      refreshToken: process.env.REACT_APP_COOKIE_REFRESH_TOKEN_KEY,
    };
  }
}

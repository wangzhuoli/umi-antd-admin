declare namespace API {
  type LoginResult = {
    token: string;
  };
  type CurrentUser = {
    username: string;
    headUrl: string;
  };
}

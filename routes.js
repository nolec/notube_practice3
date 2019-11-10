//Global URL
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//User URL
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const USER_DETAIL = "/:id";
const CHANGE_PASSWORD = "/change-password";

const urlRoutes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  editProfile: EDIT_PROFILE,
  userDetail: USER_DETAIL,
  changePassword: CHANGE_PASSWORD
};

export default urlRoutes;

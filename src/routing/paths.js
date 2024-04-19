import { StartPage, GamePage } from "src/pages";

export const UNAUTH_PATHS = [
  {
    path: "/start",
    isDefault: true,
    component: StartPage
  },
];

export const UNAUTH_MAIN_PAGE = UNAUTH_PATHS.find((path) => path.isDefault)?.path ?? "";

export const PRIVATE_PATHS = [
  {
    path: "/game",
    isDefault: false,
    component: GamePage
  },
];

export const BASIC_PRIVATE_PATH = PRIVATE_PATHS.find((path) => path.isDefault)?.path ?? "";

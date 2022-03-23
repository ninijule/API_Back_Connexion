import RouterConfig from "../types/utils/routerConfig";
import loginRouter from "./login";

const login: RouterConfig = {
  router: loginRouter,
  path: "/login",
};

export default [login];
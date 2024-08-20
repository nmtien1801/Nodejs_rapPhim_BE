import express from "express";
import apiController from "../controller/apiController";
// import { checkUserJwt, checkUserPermission } from "../middleware/jwtAction";

const router = express.Router(); // bằng app = express();
/**
 *
 * @param {*} app : express app
 * @returns
 */

const initApiRoutes = (app) => {
  // middleware
  //   router.all("*", checkUserJwt, checkUserPermission);

  //rest api - dùng web sử dụng các method (CRUD)
  //GET(R), POST (C), PUT (U), DELETE (D)
  router.post("/register", apiController.handleRegister);
  // router.post("/login", apiController.handleLogin);
  // router.post("/logout", apiController.handleLogout);

  return app.use("/api", router);
};

export default initApiRoutes;

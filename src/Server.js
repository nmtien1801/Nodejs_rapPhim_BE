import express from "express";
require("dotenv").config();
import configViewEngine from "./config/viewEngine";
import cookieParser from "cookie-parser";
import configCORS from "./config/cors";
import initApiRoutes from "./router/api";

const app = express();

// config viewEngine
configViewEngine(app);

// share localHost BE & FE
configCORS(app);

//config cookie-parser
app.use(cookieParser());

// init routes
app.use(express.json()); // Middleware để phân tích cú pháp JSON body -> bug: Cannot read property 'email' of undefined

initApiRoutes(app);

// đây là midleware(chạy từ trên xuống và xoay hoài nếu không có next)
// nếu đúng authenticate thì trang web hiện (bởi next) thường đặt ở giữa
// Cannot get/(link...) -> 404 not found
app.use((req, res) => {
  return res.send("404 not found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`>>> jwt backend is running on the port ${PORT}`);
});

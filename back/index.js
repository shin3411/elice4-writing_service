import config from "./src/config";
import { app } from "./src/app";
import mongoose from "mongoose";

const PORT = config.port || 5000;

const DB_URL =
  config.mongodbUrl ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.js 파일을 확인해 주세요.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);


app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});

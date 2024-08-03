const express = require("express");
const app = express();
const port = 80;
const takeTokenGrowtopia = require("./controller/main");

app.use(express.json());

app.post("/getToken", takeTokenGrowtopia);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

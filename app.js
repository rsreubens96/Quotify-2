const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/UserRouter");

app.use(userRouter);

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});

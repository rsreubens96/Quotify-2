const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/UserRouter");
const quoteRouter = require("./routes/QuoteRouter");

app.use(express.json());
app.use(express.urlencoded());
app.use(userRouter);
app.use(quoteRouter);

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});

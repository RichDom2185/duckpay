import app from "./app";

const PORT = parseInt(process.env.PORT || "8001");
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

import express, { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import path from "path";
import App from "./app";
import template from "./template";

const app = express();
app.use(express.static(path.resolve(__dirname, "./dist/public")));

app.get("/", (_req: Request, res: Response) => {
  fetch("https://api.github.com/users/gaearon/gists")
    .then((response) => response.json())
    .then((gists) => {
      const body = renderToString(<App gists={gists} />);
      const html = template(body);
      res.send(html);
    });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

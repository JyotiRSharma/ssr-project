export default function (body: string, gists: []) {
  return `
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8" />
    </head>
    <body>
        <div id="root">${body}</div>
        <script>window.gists = ${JSON.stringify(gists)}</script>
        <script src="/bundle.js"></script>
    </body>
</html>
`;
}

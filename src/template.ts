export default function (body: any) {
  return `
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8" />
    </head>
    <body>
        <div id="root">${body}</div>
        <script src="/bundle.js"></script>
    </body>
</html>
`;
}

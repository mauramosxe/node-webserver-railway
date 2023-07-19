const http = require("http");

http
  .createServer((req, res) => {
    

    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("id, nombre\n");
    res.write("1 Mauricio\n");
    res.write("2 Ary\n");
    res.write("3 Alex\n");
    res.write("4 Jose\n");
    res.write("5 Felipe\n");
    res.end();
  })
  .listen(8080);

console.log("Listening the port", 8080);
const http = require("http");
const fs = require("fs")
const path = require("path")
http.createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
        fs.readFile("./public/index.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/client" && request.method === "GET") {
        fs.readFile("./public/client.js", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/contact" && request.method === "GET") {
        fs.readFile("./public/contact.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/about" && request.method === "GET") {
        fs.readFile("./public/about.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/home" && request.method === "GET") {
        fs.readFile("./public/home.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/pic1" && request.method === "GET") {
        var filePath = path.join(__dirname, './public/pics/1.jpg');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/pic2" && request.method === "GET") {
        var filePath = path.join(__dirname, './public/pics/2.jpg');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/pic3" && request.method === "GET") {
        var filePath = path.join(__dirname, './public/pics/3.jpg');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/pic4" && request.method === "GET") {
        var filePath = path.join(__dirname, './public/pics/4.jpg');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/pic5" && request.method === "GET") {
        var filePath = path.join(__dirname, './public/pics/5.jpg');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/pic6" && request.method === "GET") {
        var filePath = path.join(__dirname, './public/pics/6.jpg');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/pics1" && request.method === "GET") {
        fs.readFile("./public/pic1.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    
    if (request.url === "/pics2" && request.method === "GET") {
        fs.readFile("./public/pic2.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/pics3" && request.method === "GET") {
        fs.readFile("./public/pic3.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/pics4" && request.method === "GET") {
        fs.readFile("./public/pic4.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/pics5" && request.method === "GET") {
        fs.readFile("./public/pic5.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }
    if (request.url === "/pics6" && request.method === "GET") {
        fs.readFile("./public/pic6.html", "utf8", function (err, file) {
            response.write(file);
            response.end()
            if (err) {
                console.log("somthing went wrong");

            }
        })
    }


}).listen(8080);
console.log("server is listening at port 8080");

const http = require('http')

const addElement = require('./addObj.js')

const getCollection = require('./getCollection')

const port = 4000

const server = http.createServer((req, res) => {
  if(req.url == '/survey') {
    addElement(req.method);
    res.writeHead(200, {
        'Content-type' : 'text/html'
    })

    res.write('survey saved');
    res.end();
  } else if(req.url == '/getCollection')  {
      res.writeHead(200, {
        'Content-type' : 'multipart/form-data'
    })
    res.write(getCollection());
  }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
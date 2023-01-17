// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: true })
//Allow CORS in header
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };
  
    if (event.httpMethod === 'POST' || event.httpMethod === 'DELETE' || event.httpMethod === 'PATCH') {
        // To enable CORS
        return {
            statusCode: 200, 
            headers,
            body: 'success'
        };
   }

    server.use(middlewares)
    // Add this before server.use(router)
    server.use(jsonServer.rewriter({
        '/*': '/$1',
    }))
    server.use(router)
    server.listen(3000, () => {
        console.log('JSON Server is running')
    })


    const filePath = path.join("/tmp", "db.json");
    fs.writeFileSync(filePath, JSON.stringify(data));

// Export the Server API
module.exports = server

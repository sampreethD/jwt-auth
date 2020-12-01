# jwt-auth
auth based on JWT

## Quick start

### Installation and usagae
 `$ npm i`
 
 `$ node server.js`
 
### Testing

1. Hit POST : `http://localhost:8000/auth` and pass body : `{"username" : ${usename}}`
2. Hit GET : `http://localhost:8000/` with header have authorization as `Bearer ${your_token}`



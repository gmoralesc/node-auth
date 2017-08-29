# Node Auth

Example node authentication app with jwt

# Installation
1. git clone https://github.com/gmoralesc/node-auth
2. cd node-auth
3. Create a `.env` file in the root directory with this content
```
HOST=127.0.0.1
PORT=3000
```
4. npm install
5. npm start

# API Routes

## Signup
url:
```
http://localhost:3000/api/users/signup
```
method:
```
POST
```
body:
```
{
  "name": "Gustavo",
  "lastname": "Morales",
  "email": "gustavo.morales@gmail.com"
}
```

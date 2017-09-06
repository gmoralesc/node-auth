# Node Auth

Example node authentication app with jwt

# Installation
1. git clone https://github.com/gmoralesc/node-auth
2. cd node-auth
3. Create a `.env` file in the root directory with this content
```
HOST=127.0.0.1
PORT=3000
JWTSECRET=secret
```
> Replace `secret` wth the actual secret key

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
response: 
```
{
  "success": true,
  "data": {
    "name": "Gustavo",
    "lastname": "Morales",
    "email": "gustavo.morales@gmail.com",
    "token": "JWT-HERE"
  }
}
```
## Protected route sample
url:
```
http://localhost:3000/api/users/profile
```
method:
```
GET
```
The JSON Web Token can be send as any of the following options:

header:
```
Authorization: JWT-HERE
```

query param:
```
token=JWT-HERE
```

body:
```
{
  "token": "JWT-HERE"
}
```

response:
```
{
  "success": true,
  "data": response   
}
```
> Replace `JWT-HERE` with the actual token generated in Signup route
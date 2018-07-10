# Node Auth

Example node authentication app with jwt

# Installation
1. git clone https://github.com/gmoralesc/node-auth
2. cd node-auth
3. Create a `.env` file in the root directory with this content
```
SERVER_HOSTNAME=127.0.0.1
SERVER_PORT=3000
DATABASE_URL=mongodb://127.0.0.1/nodeauth
JWTSECRET=rickandmorty
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
  "firstname": "Gustavo",
  "lastname": "Morales",
  "email": "gustavo.morales@gmail.com",
  "password": "PASSWORD"
}
```
response: 
```
{
  "success": true,
  "item": {
    "name": "Gustavo",
    "lastname": "Morales",
    "email": "gustavo.morales@gmail.com",
  },
  "meta": {
    "token": "JWT-TOKEN"
  }
}
```

## Signin
url:
```
http://localhost:3000/api/users/signin
```
method:
```
POST
```
body:
```
{
  "email": "gustavo.morales@gmail.com",
  "password": "PASSWORD"
}
```
response: 
```
{
  "success": true,
  "item": {
    "name": "Gustavo",
    "lastname": "Morales",
    "email": "gustavo.morales@gmail.com",
  },
  "meta": {
    "token": "JWT-TOKEN"
  }
}
```

## Profile protected route
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
Authorization: JWT-TOKEN
```

query param:
```
token=JWT-TOKEN
```

body:
```
{
  "token": "JWT-TOKEN"
}
```

response:
```
{
  "success": true,
  "item": {
    "firstname": "Gustavo",
    "lastname": "Morales",
    "email": "gustavo.morales@gmail.com",
  }
}
```
> Replace `JWT-TOKEN` with the actual token generated in Signup route

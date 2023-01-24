<h1 align="center">
  <br>
  <h1>API REST con Node JS, Prisma, Typescript, MySQL.</h1>
  <br>
</h1>

<h4 align="center">Realizado por el alumno Jordy Cruz Suasnabar del bootcamp backend de Silabuz</a>.</h4>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dyjhor014/api_express_prisma_ts

# Install dependencies
$ npm install

# Configure .env (database and other parameters)
$ .env

# Migrate database
$ npx prisma migrate dev

# Run the app
$ npm run dev
```

> **Note**
> You must indicate the parameters in your .env file, which must be created in the root of your project, so that everything can work correctly.

PORT=port app

DATABASE_URL="mysql://userdb:passworddb@localhost:port/mydb?schema=public"

## Funcionality

- Validate api operation

  > http://localhost:3000/
    
    Method: GET
    Response: Funcionando

- Create Users
  > http://localhost:3000/api/v1/users
    
    Method: POST
    
    send the next json model:
    ```
    {
      "name": "Jordy Cruz Suasnabar",
      "email": "email@gmail.com",
      "password": "123456"
    }
  ```
  
    Response:
    ```
       {
       message: 'Usuario creado exitosamente', 
       user: user
       }
  ```
 - Login Users
    > http://localhost:3000/api/v1/users/login
    
      Method: POS
      
      send the next json model:
      ```
      {
        "email": "email@gmail.com",
        "password": "123456"
      }
    ```
    
    Response:
    ```
        {
        message: 'Successful login'
        }
    ```
  
  - Create Songs
    > http://localhost:3000/api/v1/songs
    
      Method: POS
      
      send the next json model:
      ```
      {
        "name": "Flor de loto",
        "artist": "Enrique Bunbury",
        "album": "El espiritú del vino",
        "year": 1994,
        "genre": "Rock",
        "url": "https://www.youtube.com/watch?v=ic4vr9y5rNg",
        "duration": 240,
        "public": false
    }
    ```
    
    Response:
    ```
        {
        message: 'Canción creada exitosamente',
        song: song
        }
     ```
 
 - List all Songs
    > http://localhost:3000/api/v1/songs
    
      Method: GET
 - List Songs by id
    > http://localhost:3000/api/v1/songs/id

      Method: GET
 
 - Create Playlists
    > http://localhost:3000/api/v1/playlist
    
      Method: POS
      
      send the next json model:
      ```
      {
        "name": "mi playlist 3",
        "user": 1,                      //must contain at least one user (id)
        "songs": 1                      //must contain at least one song (id)
      }
    ```
    
    Response:
    ```
        {
        message: 'Playlist creada exitosamente',
        playlist: playlist
        }
     ```
     
 - Add songs to Playlists
    > http://localhost:3000/api/v1/playlist/addsongs
    
      Method: POS
      
      send the next json model:
      ```
      {
        "id": 7,
        "songs": [2,3]
      }
    ```
    
    Response:
    ```
        {
        message: 'Canciones agregadas exitosamente',
        playlist: {
              "id": 7,
              "name": "mi playlist",
              "userId": 1,
              "updated_at": "2023-01-24T22:59:15.378Z",
              "state": true,
              "created_at": "2023-01-24T22:59:15.378Z",
              "songs": [
                  {
                      "id": 1,
                      "name": "Flor de loto",
                      "artist": "Enrique Bunbury",
                      "album": "El espiritú del vino",
                      "year": 1994,
                      "genre": "Rock",
                      "url": "https://www.youtube.com/watch?v=ic4vr9y5rNg",
                      "duration": 379,
                      "public": true,
                      "updated_at": "2023-01-23T14:56:39.181Z",
                      "state": true,
                      "created_at": "2023-01-23T14:56:39.181Z"
                  },
                  {
                      "id": 2,
                      "name": "TNT",
                      "artist": "AC/DC",
                      "album": "T.N.T.",
                      "year": 1976,
                      "genre": "Rock",
                      "url": "https://www.youtube.com/watch?v=44XYEeD1A1U",
                      "duration": 379,
                      "public": true,
                      "updated_at": "2023-01-23T15:47:59.261Z",
                      "state": true,
                      "created_at": "2023-01-23T15:47:59.261Z"
                  },
                  {
                      "id": 3,
                      "name": "TNT Live at River Plate",
                      "artist": "AC/DC",
                      "album": "T.N.T.",
                      "year": 2009,
                      "genre": "Rock",
                      "url": "https://www.youtube.com/watch?v=44XYEeD1A1U",
                      "duration": 379,
                      "public": true,
                      "updated_at": "2023-01-23T19:23:01.256Z",
                      "state": true,
                      "created_at": "2023-01-23T19:23:01.256Z"
                  }
              ]
        }
     ```


## Credits - Technologies

This software uses the following open source:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/) - you can also use [SQLite](https://www.sqlite.org/index.html)
- [TypeScript](https://www.typescriptlang.org/)

## Support

<a href="mailto:jordycs93@gmail.com">Jordy Cruz Suasnabar</a>

## You may also like...

- [Dyjhor014](https://github.com/dyjhor014) - Other projects


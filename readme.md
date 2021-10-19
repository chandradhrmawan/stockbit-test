
## Mengunduh Repository

Unduh repository ke dalam komputer menggunakan perintah `git clone`. Url
repository dapat dilihat di dalam repository yang diinginkan.

```
git clone https://github.com/chandradhrmawan/stockbit-test.git
```

lalu pindah ke branch `master`

```
git checkout master
```


## Import Database

ambil file `stockbit_test.sql` pada direktori berikut
```
.stockbit-test
├── assets
│   └── sql
│       └──stockbit_test.sql
 
```

## Set env

rename `.env.example` menjadi `.env`
```
.stockbit-test
├── .env.example
 
```

## Install dependencies dan menjalankan aplikasi
  Install dependencies :

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

## Penggunaan Rest Api

The REST API to the app is described below.

## Get list of users

### Request

`GET /api/users/get`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/users/get

### Response

    HTTP/1.1 200 OK
    Date: Tue, 19 Oct 2021 19:10:35 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 194

    {"status":true,"message":"Success","data":[{"id":1,"userName":"Ali","ParentUserName":"Budi"},{"id":2,"userName":"Budi","ParentUserName":null},{"id":3,"userName":"Cecep","ParentUserName":"Ali"}]}

## Search list of movie

### Request

`GET /api/omdb/search?Title=batman`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/omdb/search?Title=batman

### Response

    HTTP/1.1 200 OK
    Date: Tue, 19 Oct 2021 19:10:35 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 194

    {"status":true,"message":"Success","data":{"Search":[{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman","Year":"1989","imdbID":"tt0096895","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{"Title":"Batman Returns","Year":"1992","imdbID":"tt0103776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{"Title":"Batman Forever","Year":"1995","imdbID":"tt0112462","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Batman & Robin","Year":"1997","imdbID":"tt0118688","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{"Title":"The Lego Batman Movie","Year":"2017","imdbID":"tt4116284","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"tt0103359","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"tt1569923","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"}],"totalResults":"466","Response":"True"}}

## Detail description of movie

### Request

`GET /api/omdb/detail?imdbID=tt0372784`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/omdb/detail?imdbID=tt0372784

### Response

    HTTP/1.1 200 OK
    Date: Tue, 19 Oct 2021 19:10:35 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 194

    {"status":true,"message":"Success","data":{"Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Adventure","Director":"Christopher Nolan","Writer":"Bob Kane, David S. Goyer, Christopher Nolan","Actors":"Christian Bale, Michael Caine, Ken Watanabe","Plot":"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.","Language":"English, Mandarin","Country":"United Kingdom, United States","Awards":"Nominated for 1 Oscar. 13 wins & 79 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"8.2","imdbVotes":"1,362,365","imdbID":"tt0372784","Type":"movie","DVD":"18 Oct 2005","BoxOffice":"$206,852,432","Production":"N/A","Website":"N/A","Response":"True"}}

## Get First Bracket String

### Request

`GET /api/refactor/get?str=apa(xyz)coba(satu)dua(tiga(empat)lima)`

    curl --location --request GET 'http://localhost:3000/api/refactor/get?str=apa(xyz)coba(satu)dua(tiga(empat)lima)' 

### Response

    HTTP/1.1 200 OK
    Date: Tue, 19 Oct 2021 19:10:35 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 194

    {"status":true,"message":"Success","data":{"param":"apa(xyz)coba(satu)dua(tiga(empat)lima)","oldFunc":"xyz","newFunc":"xyz"}}

## Check Anagram

### Request

`POST /api/anagram/check-anagram`

    curl --location --request POST 'http://localhost:3000/api/anagram/check-anagram' \
    --header 'Content-Type: application/json' \
    --data-raw '[
    "kita",
    "atik",
    "tika",
    "aku",
    "kia",
    "makan",
    "kua"
    ]' 

### Response

    HTTP/1.1 200 OK
    Date: Tue, 19 Oct 2021 19:10:35 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 194

    {"status":true,"message":"Success","data":[["kita","atik","tika"],["aku","kua"],["kia"],["makan"]]}



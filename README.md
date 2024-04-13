# express-backend
Express Server starter to continuously fetch data from your favorite API and store it in Supabase db.🪄
This data can later be used for machine learning and more!🤖

## 🎁 Features
* Express Server with Type Script configured.
* Uses dotenv to manage environment variables.
* Leverages Supabase to store the data.

## Setup
Make sure to create your own .env file with your SUPABASE secret. Add foreign API if necessary.
```sh
git clone https://github.com/katiBe3/express-backend.git
cd express-backend
npm i
```
Run dev mode: 
```sh
npm run dev
```
Compile and start server:
```sh
npm run build
npm run start
```

## Tech stack
- [Express Server](https://expressjs.com/de/)
- [Type Script](https://www.typescriptlang.org/)
- [Supabase](https://supabase.com/)
- [Dotenv](https://www.dotenv.org/)
- [AVA](https://github.com/avajs/ava) for blazing fast unit tests.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

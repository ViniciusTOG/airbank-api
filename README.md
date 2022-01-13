# airbank-api

## Project setup
```
npm install
```

### Postgres database with docker
```
docker-compose up -d
```

### Prisma migration and seed
```
npm run migrate
```

### Check your data with Prisma Studio
```
npx prisma studio
```

### If needed only, seed your database with transactions data
Be carefull, check if it's not seeded already
```
npx prisma db seed
```

### Run API
```
npm run dev
```

### If you need to reset and reseed your database
```
npx prisma migrate reset
```

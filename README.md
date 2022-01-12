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

### If needed, seed your database with transactions data
Be carefull if it's not seeded already
```
npx prisma db seed
```

### Run api
```
npm run dev
```

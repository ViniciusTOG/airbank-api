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
### Seed database with transactions data
Careful with not seeded already with the previous command. You can check your data with npx prisma studio.
```
npx prisma db seed
```
### Run API server
```
npm run dev
```

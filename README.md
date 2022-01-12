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
```
npx prisma db seed
```
Careful when seeding your database. You can check if it's not already seeded by the previous command with prisma studio
```
npx prisma studio.
```

### Run API server
```
npm run dev
```

import { createServer } from "http"
import express from "express"
import { ApolloServer, gql } from "apollo-server-express"
const { prisma } = require('./prisma/client')

// 1
const startServer = async () => {

  // 2
  const app = express()
  const httpServer = createServer(app)

  // 3
  const typeDefs = gql`
    type Query {
      transactions: [Transaction]
      transactionsInPeriod(start: String, end: String): [Transaction]
    }

    type Transaction {
      prismaid: ID!
      id: String!
      createdAt:   String
      updatedAt:   String
      transactionDate: String
      account:     String
      description: String
      category:    String
      reference:   String
      currency:    String
      amount:      Float
      status:      String
    }
  `

  // 4
  const resolvers = {
    Query: {
      transactions: () => {
        return prisma.transaction.findMany()
      },
      transactionsInPeriod: (_: any, args: any) => {
        return prisma.transaction.findMany({
        where: {
          OR: [
                {
                transactionDate: {
                  gte: new Date(
                    args.start
                  ),
                  lte: new Date(
                    args.end
                  ),
                },
              },
                {
                transactionDate: {
                  startsWith: args.end
                },
              },
            ]
        },
      })
    },
    },
  }

  // 5
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  // 6
  await apolloServer.start()

  // 7
  apolloServer.applyMiddleware({
      app,
      path: '/api'
  })

  // 8
  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
  )
}

startServer()

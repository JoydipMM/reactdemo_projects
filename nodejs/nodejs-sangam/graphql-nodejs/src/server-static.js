// 01 import Apollo Server
const { ApolloServer } = require("@apollo/server");

// 02 "startStandaloneServer" provides a simple way to run Apollo Server without manually setting up an Express application
const { startStandaloneServer } = require("@apollo/server/standalone");

// 03 import typeDefs and resolvers
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

// 04 create a Apollo Server function
async function startServer() {
    // first step: create an instance of Apollo Server. Inside this instance we pass schema and resolvers
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    // second step: configure the server
    // start a server using Appolo standalone server. It has url which gives us the server url
    // this standalone server take instance of Apollo Server as a first argument and second argument is configuration where we can set "port key and value" pair in "listen key"
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    })

    // log the url
    console.log(`Server ready at: ${url}`);

}


// 05. start / invoke the server
startServer();
import { buildSchema } from "graphql";

export default buildSchema(`
   type DemoSchema {
    text: String!
    view : Float!
  }

   type RootQuery {
     hello: DemoSchema!
   }

   schema {
      query : RootQuery
   }
`);

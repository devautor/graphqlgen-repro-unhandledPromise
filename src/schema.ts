// Graphql schema of the server API

import { gql } from "apollo-server";

import addressSchema from "./schema/address";
import commonSchema from "./schema/common";
import postSchema from "./schema/post";
import userSchema from "./schema/user";

const blankSchema = gql`
  type Query {
    _blank: String
  }

  type Mutation {
    _blank: String
  }

  type Subscription {
    _blank: String
  }
`;

const schema = [
  blankSchema,
  addressSchema,
  commonSchema,
  postSchema,
  userSchema
];

export default schema;

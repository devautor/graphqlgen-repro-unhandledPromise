import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    """
    Get a User by ID
    """
    user(where: UserWhereUniqueInput!): User
  }

  extend type Mutation {
    """
    Create a User on sign up
    """
    createUserAccount(
      data: UserAccountCreateInput!
    ): CreateUserAccountMutationResponse!
    """
    User updates profile & address
    """
    updateUserAccount(
      data: UserAccountUpdateInput!
    ): UpdateUserAccountMutationResponse!
  }

  type User {
    """
    ID
    """
    id: ID!
    # Personal Information (both emailId and mobileNumber can't be null together)
    """
    Email id of the User (unique)
    """
    emailId: String!
    """
    Mobile number of the User (unique)
    """
    mobileNumber: String
    """
    Name of the User
    """
    name: String
    """
    Profile photo URL
    """
    profilePhotoURL: String
    """
    Gender
    """
    gender: Gender
    """
    Addresses registered by the User
    """
    addresses(
      where: AddressWhereInput
      orderBy: AddressOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Address!]
    # end of personal info
    """
    Posts liked by the User
    """
    likedPosts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post!]
    """
    Posts shared by the User
    """
    sharedPosts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post!]
    # end of likes and shares
    """
    App rating given by the User
    """
    appRating: Int
  }

  # start of mutation payloads
  type CreateUserAccountMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type UpdateUserAccountMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }
  # end of mutation payloads

  # start of input types
  input UserWhereUniqueInput {
    id: ID
    emailId: String
  }

  input UserWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    emailId: String
    emailId_not: String
    emailId_in: [String!]
    emailId_not_in: [String!]
    emailId_lt: String
    emailId_lte: String
    emailId_gt: String
    emailId_gte: String
    emailId_contains: String
    emailId_not_contains: String
    emailId_starts_with: String
    emailId_not_starts_with: String
    emailId_ends_with: String
    emailId_not_ends_with: String
    gender: Gender
    gender_not: Gender
    gender_in: [Gender!]
    gender_not_in: [Gender!]
    addresses_every: AddressWhereInput
    addresses_some: AddressWhereInput
    addresses_none: AddressWhereInput
    likedPosts_every: PostWhereInput
    likedPosts_some: PostWhereInput
    likedPosts_none: PostWhereInput
    sharedPosts_every: PostWhereInput
    sharedPosts_some: PostWhereInput
    sharedPosts_none: PostWhereInput
    appRating: Int
    appRating_not: Int
    appRating_in: [Int!]
    appRating_not_in: [Int!]
    appRating_lt: Int
    appRating_lte: Int
    appRating_gt: Int
    appRating_gte: Int
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }

  enum UserOrderByInput {
    id_ASC
    id_DESC
    emailId_ASC
    emailId_DESC
  }

  input UserAccountCreateInput {
    emailId: String!
    mobileNumber: String
    name: String
    profilePhotoURL: String
    gender: Gender
    address: AddressCreateOneInput!
  }

  input UserAccountUpdateInput {
    emailId: String
    mobileNumber: String
    name: String
    profilePhotoURL: String
    gender: Gender
    address: AddressUpdateInput
  }

  # end of input types
`;

export default typeDefs;

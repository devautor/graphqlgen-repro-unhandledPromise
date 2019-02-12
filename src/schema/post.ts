import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    """
    Get a post by ID
    """
    post(where: PostWhereUniqueInput!): Post
    """
    Paginated (cursor-based) list of posts
    """
    postsConnection(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): PostConnection!
  }

  extend type Mutation {
    """
    Store creates a post
    """
    createPost(data: PostCreateInput!): CreatePostMutationResponse!
    """
    Store updates "text" of a post
    """
    updatePostText(
      data: PostTextUpdateInput!
      where: PostWhereUniqueInput!
    ): UpdatePostTextMutationResponse!
    """
    Store deletes a post
    """
    deletePost(where: PostWhereUniqueInput!): DeletePostMutationResponse!

    ## User specific
    """
    User likes/unlikes a post
    """
    likePost(
      data: PostUserLikesWhereUniqueInput!
      where: PostWhereUniqueInput!
    ): LikePostMutationResponse!
    """
    User shares a post
    """
    sharePost(where: PostUserWhereUniqueInput!): SharePostMutationResponse!
  }

  extend type Subscription {
    """
    Creation of a new post is subscribed
    """
    postAdded: NewPostSubscriptionResponse!
  }

  # start of type Post
  type Post {
    """
    ID
    """
    id: ID!
    """
    Author user
    """
    author: User!
    """
    Text content
    """
    text: String
    """
    Users who liked this post
    """
    likedBy(after: String, first: Int): [User!]
    """
    Number of Users who liked this post
    """
    likedByCounter: Int
    """
    Users who shared this post
    """
    sharedBy(after: String, first: Int): [User!]
    """
    Number of Users who shared this post
    """
    sharedByCounter: Int
  }
  # end of type Post

  """
  A post's previous values, required in subscription
  """
  type PostPreviousValues {
    """
    ID
    """
    id: ID!
    """
    Text content
    """
    text: String
  }

  # start of connection
  """
  Post cursor-based connection type
  """
  type PostConnection {
    """
    Page info
    """
    pageInfo: PageInfo!
    """
    Edge info
    """
    edges: [PostEdge]!
    """
    Aggregate info
    """
    aggregate: AggregatePost!
  }

  """
  Post connection edge type
  """
  type PostEdge {
    """
    Post node
    """
    node: Post!
    """
    Cursor
    """
    cursor: String!
  }

  """
  Aggregate info on Post connection
  """
  type AggregatePost {
    """
    Number of posts in a connection
    """
    count: Int!
  }
  # end of connection

  # start of payloads
  type CreatePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
  }

  type UpdatePostTextMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
  }

  type DeletePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
  }

  type LikePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
    user: User
  }

  type SharePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
    user: User
  }

  type NewPostSubscriptionResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    node: Post
    mutation: MutationType!
  }
  # end of payloads

  # start of input types
  input PostWhereUniqueInput {
    id: ID
  }

  input PostUserLikesWhereUniqueInput {
    connect: UserWhereUniqueInput
    disconnect: UserWhereUniqueInput
  }

  input PostUserWhereUniqueInput {
    User: UserWhereUniqueInput!
    post: PostWhereUniqueInput!
  }

  input PostWhereInput {
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
    likedBy_every: UserWhereInput
    likedBy_some: UserWhereInput
    likedBy_none: UserWhereInput
    sharedBy_every: UserWhereInput
    sharedBy_some: UserWhereInput
    sharedBy_none: UserWhereInput
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
  }

  enum PostOrderByInput {
    id_ASC
    id_DESC
  }

  input PostCreateInput {
    text: String
  }

  input PostTextUpdateInput {
    text: String
  }
  # end of input types
`;

export default typeDefs;

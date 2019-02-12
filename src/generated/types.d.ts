export type Maybe<T> = T | null;

export interface AddressWhereUniqueInput {
  id?: Maybe<string>;
}

export interface PostWhereUniqueInput {
  id?: Maybe<string>;
}

export interface AddressWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  userAddress?: Maybe<UserWhereInput>;

  AND?: Maybe<AddressWhereInput[]>;

  OR?: Maybe<AddressWhereInput[]>;

  NOT?: Maybe<AddressWhereInput[]>;
}

export interface UserWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  emailId?: Maybe<string>;

  emailId_not?: Maybe<string>;

  emailId_in?: Maybe<string[]>;

  emailId_not_in?: Maybe<string[]>;

  emailId_lt?: Maybe<string>;

  emailId_lte?: Maybe<string>;

  emailId_gt?: Maybe<string>;

  emailId_gte?: Maybe<string>;

  emailId_contains?: Maybe<string>;

  emailId_not_contains?: Maybe<string>;

  emailId_starts_with?: Maybe<string>;

  emailId_not_starts_with?: Maybe<string>;

  emailId_ends_with?: Maybe<string>;

  emailId_not_ends_with?: Maybe<string>;

  gender?: Maybe<Gender>;

  gender_not?: Maybe<Gender>;

  gender_in?: Maybe<Gender[]>;

  gender_not_in?: Maybe<Gender[]>;

  addresses_every?: Maybe<AddressWhereInput>;

  addresses_some?: Maybe<AddressWhereInput>;

  addresses_none?: Maybe<AddressWhereInput>;

  likedPosts_every?: Maybe<PostWhereInput>;

  likedPosts_some?: Maybe<PostWhereInput>;

  likedPosts_none?: Maybe<PostWhereInput>;

  sharedPosts_every?: Maybe<PostWhereInput>;

  sharedPosts_some?: Maybe<PostWhereInput>;

  sharedPosts_none?: Maybe<PostWhereInput>;

  appRating?: Maybe<number>;

  appRating_not?: Maybe<number>;

  appRating_in?: Maybe<number[]>;

  appRating_not_in?: Maybe<number[]>;

  appRating_lt?: Maybe<number>;

  appRating_lte?: Maybe<number>;

  appRating_gt?: Maybe<number>;

  appRating_gte?: Maybe<number>;

  AND?: Maybe<UserWhereInput[]>;

  OR?: Maybe<UserWhereInput[]>;

  NOT?: Maybe<UserWhereInput[]>;
}

export interface PostWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  likedBy_every?: Maybe<UserWhereInput>;

  likedBy_some?: Maybe<UserWhereInput>;

  likedBy_none?: Maybe<UserWhereInput>;

  sharedBy_every?: Maybe<UserWhereInput>;

  sharedBy_some?: Maybe<UserWhereInput>;

  sharedBy_none?: Maybe<UserWhereInput>;

  AND?: Maybe<PostWhereInput[]>;

  OR?: Maybe<PostWhereInput[]>;

  NOT?: Maybe<PostWhereInput[]>;
}

export interface UserWhereUniqueInput {
  id?: Maybe<string>;

  emailId?: Maybe<string>;
}

export interface PostCreateInput {
  text?: Maybe<string>;
}

export interface PostTextUpdateInput {
  text?: Maybe<string>;
}

export interface PostUserLikesWhereUniqueInput {
  connect?: Maybe<UserWhereUniqueInput>;

  disconnect?: Maybe<UserWhereUniqueInput>;
}

export interface PostUserWhereUniqueInput {
  User: UserWhereUniqueInput;

  post: PostWhereUniqueInput;
}

export interface UserAccountCreateInput {
  emailId: string;

  mobileNumber?: Maybe<string>;

  name?: Maybe<string>;

  profilePhotoURL?: Maybe<string>;

  gender?: Maybe<Gender>;

  address: AddressCreateOneInput;
}

export interface AddressCreateOneInput {
  create?: Maybe<AddressCreateInput>;

  connect?: Maybe<AddressWhereUniqueInput>;
}

export interface AddressCreateInput {
  building: string;

  locality: string;

  city: string;

  postalCode: string;

  state: string;

  landmark?: Maybe<string>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  recipientName: string;

  recipientMobile: string;

  recipientAlternateMobile?: Maybe<string>;

  addressType: AddressType;
}

export interface UserAccountUpdateInput {
  emailId?: Maybe<string>;

  mobileNumber?: Maybe<string>;

  name?: Maybe<string>;

  profilePhotoURL?: Maybe<string>;

  gender?: Maybe<Gender>;

  address?: Maybe<AddressUpdateInput>;
}

export interface AddressUpdateInput {
  building?: Maybe<string>;

  locality?: Maybe<string>;

  city?: Maybe<string>;

  postalCode?: Maybe<string>;

  state?: Maybe<string>;

  landmark?: Maybe<string>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  recipientName?: Maybe<string>;

  recipientMobile?: Maybe<string>;

  recipientAlternateMobile?: Maybe<string>;

  addressType?: Maybe<AddressType>;
}
/** Types of addresses for a user */
export enum AddressType {
  Home = "HOME",
  Work = "WORK"
}
/** Gender */
export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
  Other = "OTHER"
}

export enum AddressOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC"
}

export enum PostOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC"
}
/** Types of mutation */
export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export enum UserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  EmailIdAsc = "emailId_ASC",
  EmailIdDesc = "emailId_DESC"
}

// ====================================================
// Interfaces
// ====================================================

export interface Node {
  id: string;
}

/** MutationResponse interface enables transactional information to be returned in addition to the normal mutation response object */
export interface MutationResponse {
  /** code is a string representing a transactional value explaining details about the status of the data change. Think of this like an HTTP status code. */
  code: string;
  /** success is a boolean indicating whether the update was successful or not. */
  success: boolean;
  /** message is a string that is meant to be a human-readable description of the status of the transaction. It is intended to be used in the UI of the product. */
  message: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  _blank?: Maybe<string>;
  /** Get an address by ID */
  address?: Maybe<Address>;
  /** Get a node by ID */
  node?: Maybe<Node>;
  /** Get a post by ID */
  post?: Maybe<Post>;
  /** Paginated (cursor-based) list of posts */
  postsConnection: PostConnection;
  /** Get a User by ID */
  user?: Maybe<User>;
}

/** Physical address template used in the marketplace */
export interface Address {
  /** ID */
  id: string;
  /** Flat number or building name */
  building: string;
  /** Locality, area, or street */
  locality: string;
  /** City */
  city: string;
  /** Postal Code */
  postalCode: string;
  /** State */
  state: string;
  /** Landmark nearby, optional */
  landmark?: Maybe<string>;
  /** Latitude of this location; constraint: Decimal(9,6) */
  latitude?: Maybe<number>;
  /** Longitude of this location; constraint: Decimal(9,6) */
  longitude?: Maybe<number>;
  /** Name of the address resident */
  recipientName: string;
  /** Mobile number of the address resident */
  recipientMobile: string;
  /** Alternate mobile number of the address resident */
  recipientAlternateMobile?: Maybe<string>;
  /** Address type option, available only to a user */
  addressType: AddressType;
}

export interface Post {
  /** ID */
  id: string;
  /** Author user */
  author: User;
  /** Text content */
  text?: Maybe<string>;
  /** Users who liked this post */
  likedBy?: Maybe<User[]>;
  /** Number of Users who liked this post */
  likedByCounter?: Maybe<number>;
  /** Users who shared this post */
  sharedBy?: Maybe<User[]>;
  /** Number of Users who shared this post */
  sharedByCounter?: Maybe<number>;
}

export interface User {
  /** ID */
  id: string;
  /** Email id of the User (unique) */
  emailId: string;
  /** Mobile number of the User (unique) */
  mobileNumber?: Maybe<string>;
  /** Name of the User */
  name?: Maybe<string>;
  /** Profile photo URL */
  profilePhotoURL?: Maybe<string>;
  /** Gender */
  gender?: Maybe<Gender>;
  /** Addresses registered by the User */
  addresses?: Maybe<Address[]>;
  /** Posts liked by the User */
  likedPosts?: Maybe<Post[]>;
  /** Posts shared by the User */
  sharedPosts?: Maybe<Post[]>;
  /** App rating given by the User */
  appRating?: Maybe<number>;
}

/** Post cursor-based connection type */
export interface PostConnection {
  /** Page info */
  pageInfo: PageInfo;
  /** Edge info */
  edges: (Maybe<PostEdge>)[];
  /** Aggregate info */
  aggregate: AggregatePost;
}

/** Info helpful with pagination */
export interface PageInfo {
  hasNextPage: boolean;

  hasPreviousPage: boolean;

  startCursor?: Maybe<string>;

  endCursor?: Maybe<string>;
}

/** Post connection edge type */
export interface PostEdge {
  /** Post node */
  node: Post;
  /** Cursor */
  cursor: string;
}

/** Aggregate info on Post connection */
export interface AggregatePost {
  /** Number of posts in a connection */
  count: number;
}

export interface Mutation {
  _blank?: Maybe<string>;
  /** Delete an address */
  deleteAddress: DeleteAddressMutationResponse;
  /** Store creates a post */
  createPost: CreatePostMutationResponse;
  /** Store updates "text" of a post */
  updatePostText: UpdatePostTextMutationResponse;
  /** Store deletes a post */
  deletePost: DeletePostMutationResponse;
  /** User likes/unlikes a post */
  likePost: LikePostMutationResponse;
  /** User shares a post */
  sharePost: SharePostMutationResponse;
  /** Create a User on sign up */
  createUserAccount: CreateUserAccountMutationResponse;
  /** User updates profile & address */
  updateUserAccount: UpdateUserAccountMutationResponse;
}

export interface DeleteAddressMutationResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  address?: Maybe<Address>;
}

export interface CreatePostMutationResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  post?: Maybe<Post>;
}

export interface UpdatePostTextMutationResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  post?: Maybe<Post>;
}

export interface DeletePostMutationResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  post?: Maybe<Post>;
}

export interface LikePostMutationResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  post?: Maybe<Post>;

  user?: Maybe<User>;
}

export interface SharePostMutationResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  post?: Maybe<Post>;

  user?: Maybe<User>;
}

export interface CreateUserAccountMutationResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  user?: Maybe<User>;
}

export interface UpdateUserAccountMutationResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  user?: Maybe<User>;
}

export interface Subscription {
  _blank?: Maybe<string>;
  /** Creation of a new post is subscribed */
  postAdded: NewPostSubscriptionResponse;
}

export interface NewPostSubscriptionResponse extends MutationResponse {
  code: string;

  success: boolean;

  message: string;

  node?: Maybe<Post>;

  mutation: MutationType;
}

/** Return object for mutation operation on multiple nodes */
export interface BatchPayload {
  count: number;
}

/** A post's previous values, required in subscription */
export interface PostPreviousValues {
  /** ID */
  id: string;
  /** Text content */
  text?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface AddressQueryArgs {
  where: AddressWhereUniqueInput;
}
export interface NodeQueryArgs {
  id: string;
}
export interface PostQueryArgs {
  where: PostWhereUniqueInput;
}
export interface PostsConnectionQueryArgs {
  where?: Maybe<PostWhereInput>;

  orderBy?: Maybe<PostOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface UserQueryArgs {
  where: UserWhereUniqueInput;
}
export interface LikedByPostArgs {
  after?: Maybe<string>;

  first?: Maybe<number>;
}
export interface SharedByPostArgs {
  after?: Maybe<string>;

  first?: Maybe<number>;
}
export interface AddressesUserArgs {
  where?: Maybe<AddressWhereInput>;

  orderBy?: Maybe<AddressOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface LikedPostsUserArgs {
  where?: Maybe<PostWhereInput>;

  orderBy?: Maybe<PostOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface SharedPostsUserArgs {
  where?: Maybe<PostWhereInput>;

  orderBy?: Maybe<PostOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface DeleteAddressMutationArgs {
  where: AddressWhereUniqueInput;
}
export interface CreatePostMutationArgs {
  data: PostCreateInput;
}
export interface UpdatePostTextMutationArgs {
  data: PostTextUpdateInput;

  where: PostWhereUniqueInput;
}
export interface DeletePostMutationArgs {
  where: PostWhereUniqueInput;
}
export interface LikePostMutationArgs {
  data: PostUserLikesWhereUniqueInput;

  where: PostWhereUniqueInput;
}
export interface SharePostMutationArgs {
  where: PostUserWhereUniqueInput;
}
export interface CreateUserAccountMutationArgs {
  data: UserAccountCreateInput;
}
export interface UpdateUserAccountMutationArgs {
  data: UserAccountUpdateInput;
}

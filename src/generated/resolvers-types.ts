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
    Work = "WORK",
  }
/** Gender */
  export enum Gender {
    Male = "MALE",
    Female = "FEMALE",
    Other = "OTHER",
  }

  export enum AddressOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
  }

  export enum PostOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
  }
/** Types of mutation */
  export enum MutationType {
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED",
  }

  export enum UserOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    EmailIdAsc = "emailId_ASC",
    EmailIdDesc = "emailId_DESC",
  }
import { GraphQLResolveInfo } from 'graphql';





export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, Context = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;


export namespace QueryResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = {}> {
    
    _blank?: _BlankResolver<Maybe<string>, TypeParent, Context>;
    /** Get an address by ID */
    address?: AddressResolver<Maybe<Address>, TypeParent, Context>;
    /** Get a node by ID */
    node?: NodeResolver<Maybe<Node>, TypeParent, Context>;
    /** Get a post by ID */
    post?: PostResolver<Maybe<Post>, TypeParent, Context>;
    /** Paginated (cursor-based) list of posts */
    postsConnection?: PostsConnectionResolver<PostConnection, TypeParent, Context>;
    /** Get a User by ID */
    user?: UserResolver<Maybe<User>, TypeParent, Context>;
  }


  export type _BlankResolver<R = Maybe<string>, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type AddressResolver<R = Maybe<Address>, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, AddressArgs>;
  export interface AddressArgs {
    
    where: AddressWhereUniqueInput;
  }


  export type NodeResolver<R = Maybe<Node>, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, NodeArgs>;
  export interface NodeArgs {
    
    id: string;
  }


  export type PostResolver<R = Maybe<Post>, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, PostArgs>;
  export interface PostArgs {
    
    where: PostWhereUniqueInput;
  }


  export type PostsConnectionResolver<R = PostConnection, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, PostsConnectionArgs>;
  export interface PostsConnectionArgs {
    
    where?: Maybe<PostWhereInput>;
    
    orderBy?: Maybe<PostOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type UserResolver<R = Maybe<User>, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {
    
    where: UserWhereUniqueInput;
  }


}
/** Physical address template used in the marketplace */
export namespace AddressResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = Address> {
    /** ID */
    id?: IdResolver<string, TypeParent, Context>;
    /** Flat number or building name */
    building?: BuildingResolver<string, TypeParent, Context>;
    /** Locality, area, or street */
    locality?: LocalityResolver<string, TypeParent, Context>;
    /** City */
    city?: CityResolver<string, TypeParent, Context>;
    /** Postal Code */
    postalCode?: PostalCodeResolver<string, TypeParent, Context>;
    /** State */
    state?: StateResolver<string, TypeParent, Context>;
    /** Landmark nearby, optional */
    landmark?: LandmarkResolver<Maybe<string>, TypeParent, Context>;
    /** Latitude of this location; constraint: Decimal(9,6) */
    latitude?: LatitudeResolver<Maybe<number>, TypeParent, Context>;
    /** Longitude of this location; constraint: Decimal(9,6) */
    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;
    /** Name of the address resident */
    recipientName?: RecipientNameResolver<string, TypeParent, Context>;
    /** Mobile number of the address resident */
    recipientMobile?: RecipientMobileResolver<string, TypeParent, Context>;
    /** Alternate mobile number of the address resident */
    recipientAlternateMobile?: RecipientAlternateMobileResolver<Maybe<string>, TypeParent, Context>;
    /** Address type option, available only to a user */
    addressType?: AddressTypeResolver<AddressType, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type BuildingResolver<R = string, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type LocalityResolver<R = string, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type CityResolver<R = string, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type PostalCodeResolver<R = string, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type StateResolver<R = string, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type LandmarkResolver<R = Maybe<string>, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type LatitudeResolver<R = Maybe<number>, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type LongitudeResolver<R = Maybe<number>, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type RecipientNameResolver<R = string, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type RecipientMobileResolver<R = string, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type RecipientAlternateMobileResolver<R = Maybe<string>, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type AddressTypeResolver<R = AddressType, Parent = Address, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace PostResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = Post> {
    /** ID */
    id?: IdResolver<string, TypeParent, Context>;
    /** Author user */
    author?: AuthorResolver<User, TypeParent, Context>;
    /** Text content */
    text?: TextResolver<Maybe<string>, TypeParent, Context>;
    /** Users who liked this post */
    likedBy?: LikedByResolver<Maybe<User[]>, TypeParent, Context>;
    /** Number of Users who liked this post */
    likedByCounter?: LikedByCounterResolver<Maybe<number>, TypeParent, Context>;
    /** Users who shared this post */
    sharedBy?: SharedByResolver<Maybe<User[]>, TypeParent, Context>;
    /** Number of Users who shared this post */
    sharedByCounter?: SharedByCounterResolver<Maybe<number>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Post, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type AuthorResolver<R = User, Parent = Post, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type TextResolver<R = Maybe<string>, Parent = Post, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type LikedByResolver<R = Maybe<User[]>, Parent = Post, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, LikedByArgs>;
  export interface LikedByArgs {
    
    after?: Maybe<string>;
    
    first?: Maybe<number>;
  }


  export type LikedByCounterResolver<R = Maybe<number>, Parent = Post, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SharedByResolver<R = Maybe<User[]>, Parent = Post, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, SharedByArgs>;
  export interface SharedByArgs {
    
    after?: Maybe<string>;
    
    first?: Maybe<number>;
  }


  export type SharedByCounterResolver<R = Maybe<number>, Parent = Post, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = User> {
    /** ID */
    id?: IdResolver<string, TypeParent, Context>;
    /** Email id of the User (unique) */
    emailId?: EmailIdResolver<string, TypeParent, Context>;
    /** Mobile number of the User (unique) */
    mobileNumber?: MobileNumberResolver<Maybe<string>, TypeParent, Context>;
    /** Name of the User */
    name?: NameResolver<Maybe<string>, TypeParent, Context>;
    /** Profile photo URL */
    profilePhotoURL?: ProfilePhotoUrlResolver<Maybe<string>, TypeParent, Context>;
    /** Gender */
    gender?: GenderResolver<Maybe<Gender>, TypeParent, Context>;
    /** Addresses registered by the User */
    addresses?: AddressesResolver<Maybe<Address[]>, TypeParent, Context>;
    /** Posts liked by the User */
    likedPosts?: LikedPostsResolver<Maybe<Post[]>, TypeParent, Context>;
    /** Posts shared by the User */
    sharedPosts?: SharedPostsResolver<Maybe<Post[]>, TypeParent, Context>;
    /** App rating given by the User */
    appRating?: AppRatingResolver<Maybe<number>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type EmailIdResolver<R = string, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MobileNumberResolver<R = Maybe<string>, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type NameResolver<R = Maybe<string>, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type ProfilePhotoUrlResolver<R = Maybe<string>, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type GenderResolver<R = Maybe<Gender>, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type AddressesResolver<R = Maybe<Address[]>, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, AddressesArgs>;
  export interface AddressesArgs {
    
    where?: Maybe<AddressWhereInput>;
    
    orderBy?: Maybe<AddressOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type LikedPostsResolver<R = Maybe<Post[]>, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, LikedPostsArgs>;
  export interface LikedPostsArgs {
    
    where?: Maybe<PostWhereInput>;
    
    orderBy?: Maybe<PostOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type SharedPostsResolver<R = Maybe<Post[]>, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, SharedPostsArgs>;
  export interface SharedPostsArgs {
    
    where?: Maybe<PostWhereInput>;
    
    orderBy?: Maybe<PostOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type AppRatingResolver<R = Maybe<number>, Parent = User, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}
/** Post cursor-based connection type */
export namespace PostConnectionResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = PostConnection> {
    /** Page info */
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;
    /** Edge info */
    edges?: EdgesResolver<(Maybe<PostEdge>)[], TypeParent, Context>;
    /** Aggregate info */
    aggregate?: AggregateResolver<AggregatePost, TypeParent, Context>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = PostConnection, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type EdgesResolver<R = (Maybe<PostEdge>)[], Parent = PostConnection, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type AggregateResolver<R = AggregatePost, Parent = PostConnection, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}
/** Info helpful with pagination */
export namespace PageInfoResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = PageInfo> {
    
    hasNextPage?: HasNextPageResolver<boolean, TypeParent, Context>;
    
    hasPreviousPage?: HasPreviousPageResolver<boolean, TypeParent, Context>;
    
    startCursor?: StartCursorResolver<Maybe<string>, TypeParent, Context>;
    
    endCursor?: EndCursorResolver<Maybe<string>, TypeParent, Context>;
  }


  export type HasNextPageResolver<R = boolean, Parent = PageInfo, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type HasPreviousPageResolver<R = boolean, Parent = PageInfo, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type StartCursorResolver<R = Maybe<string>, Parent = PageInfo, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type EndCursorResolver<R = Maybe<string>, Parent = PageInfo, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}
/** Post connection edge type */
export namespace PostEdgeResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = PostEdge> {
    /** Post node */
    node?: NodeResolver<Post, TypeParent, Context>;
    /** Cursor */
    cursor?: CursorResolver<string, TypeParent, Context>;
  }


  export type NodeResolver<R = Post, Parent = PostEdge, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type CursorResolver<R = string, Parent = PostEdge, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}
/** Aggregate info on Post connection */
export namespace AggregatePostResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = AggregatePost> {
    /** Number of posts in a connection */
    count?: CountResolver<number, TypeParent, Context>;
  }


  export type CountResolver<R = number, Parent = AggregatePost, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = {}> {
    
    _blank?: _BlankResolver<Maybe<string>, TypeParent, Context>;
    /** Delete an address */
    deleteAddress?: DeleteAddressResolver<DeleteAddressMutationResponse, TypeParent, Context>;
    /** Store creates a post */
    createPost?: CreatePostResolver<CreatePostMutationResponse, TypeParent, Context>;
    /** Store updates "text" of a post */
    updatePostText?: UpdatePostTextResolver<UpdatePostTextMutationResponse, TypeParent, Context>;
    /** Store deletes a post */
    deletePost?: DeletePostResolver<DeletePostMutationResponse, TypeParent, Context>;
    /** User likes/unlikes a post */
    likePost?: LikePostResolver<LikePostMutationResponse, TypeParent, Context>;
    /** User shares a post */
    sharePost?: SharePostResolver<SharePostMutationResponse, TypeParent, Context>;
    /** Create a User on sign up */
    createUserAccount?: CreateUserAccountResolver<CreateUserAccountMutationResponse, TypeParent, Context>;
    /** User updates profile & address */
    updateUserAccount?: UpdateUserAccountResolver<UpdateUserAccountMutationResponse, TypeParent, Context>;
  }


  export type _BlankResolver<R = Maybe<string>, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type DeleteAddressResolver<R = DeleteAddressMutationResponse, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, DeleteAddressArgs>;
  export interface DeleteAddressArgs {
    
    where: AddressWhereUniqueInput;
  }


  export type CreatePostResolver<R = CreatePostMutationResponse, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, CreatePostArgs>;
  export interface CreatePostArgs {
    
    data: PostCreateInput;
  }


  export type UpdatePostTextResolver<R = UpdatePostTextMutationResponse, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, UpdatePostTextArgs>;
  export interface UpdatePostTextArgs {
    
    data: PostTextUpdateInput;
    
    where: PostWhereUniqueInput;
  }


  export type DeletePostResolver<R = DeletePostMutationResponse, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, DeletePostArgs>;
  export interface DeletePostArgs {
    
    where: PostWhereUniqueInput;
  }


  export type LikePostResolver<R = LikePostMutationResponse, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, LikePostArgs>;
  export interface LikePostArgs {
    
    data: PostUserLikesWhereUniqueInput;
    
    where: PostWhereUniqueInput;
  }


  export type SharePostResolver<R = SharePostMutationResponse, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, SharePostArgs>;
  export interface SharePostArgs {
    
    where: PostUserWhereUniqueInput;
  }


  export type CreateUserAccountResolver<R = CreateUserAccountMutationResponse, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, CreateUserAccountArgs>;
  export interface CreateUserAccountArgs {
    
    data: UserAccountCreateInput;
  }


  export type UpdateUserAccountResolver<R = UpdateUserAccountMutationResponse, Parent = {}, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context, UpdateUserAccountArgs>;
  export interface UpdateUserAccountArgs {
    
    data: UserAccountUpdateInput;
  }


}

export namespace DeleteAddressMutationResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = DeleteAddressMutationResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    address?: AddressResolver<Maybe<Address>, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = DeleteAddressMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = DeleteAddressMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = DeleteAddressMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type AddressResolver<R = Maybe<Address>, Parent = DeleteAddressMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace CreatePostMutationResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = CreatePostMutationResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    post?: PostResolver<Maybe<Post>, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = CreatePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = CreatePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = CreatePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type PostResolver<R = Maybe<Post>, Parent = CreatePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace UpdatePostTextMutationResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = UpdatePostTextMutationResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    post?: PostResolver<Maybe<Post>, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = UpdatePostTextMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = UpdatePostTextMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = UpdatePostTextMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type PostResolver<R = Maybe<Post>, Parent = UpdatePostTextMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace DeletePostMutationResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = DeletePostMutationResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    post?: PostResolver<Maybe<Post>, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = DeletePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = DeletePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = DeletePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type PostResolver<R = Maybe<Post>, Parent = DeletePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace LikePostMutationResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = LikePostMutationResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    post?: PostResolver<Maybe<Post>, TypeParent, Context>;
    
    user?: UserResolver<Maybe<User>, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = LikePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = LikePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = LikePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type PostResolver<R = Maybe<Post>, Parent = LikePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type UserResolver<R = Maybe<User>, Parent = LikePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace SharePostMutationResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = SharePostMutationResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    post?: PostResolver<Maybe<Post>, TypeParent, Context>;
    
    user?: UserResolver<Maybe<User>, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = SharePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = SharePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = SharePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type PostResolver<R = Maybe<Post>, Parent = SharePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type UserResolver<R = Maybe<User>, Parent = SharePostMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace CreateUserAccountMutationResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = CreateUserAccountMutationResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    user?: UserResolver<Maybe<User>, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = CreateUserAccountMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = CreateUserAccountMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = CreateUserAccountMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type UserResolver<R = Maybe<User>, Parent = CreateUserAccountMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace UpdateUserAccountMutationResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = UpdateUserAccountMutationResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    user?: UserResolver<Maybe<User>, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = UpdateUserAccountMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = UpdateUserAccountMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = UpdateUserAccountMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type UserResolver<R = Maybe<User>, Parent = UpdateUserAccountMutationResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}

export namespace SubscriptionResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = {}> {
    
    _blank?: _BlankResolver<Maybe<string>, TypeParent, Context>;
    /** Creation of a new post is subscribed */
    postAdded?: PostAddedResolver<NewPostSubscriptionResponse, TypeParent, Context>;
  }


  export type _BlankResolver<R = Maybe<string>, Parent = {}, Context = ./src/context.ts:Context> = SubscriptionResolver<R, Parent, Context>;
  export type PostAddedResolver<R = NewPostSubscriptionResponse, Parent = {}, Context = ./src/context.ts:Context> = SubscriptionResolver<R, Parent, Context>;
}

export namespace NewPostSubscriptionResponseResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = NewPostSubscriptionResponse> {
    
    code?: CodeResolver<string, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
    
    node?: NodeResolver<Maybe<Post>, TypeParent, Context>;
    
    mutation?: MutationResolver<MutationType, TypeParent, Context>;
  }


  export type CodeResolver<R = string, Parent = NewPostSubscriptionResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = NewPostSubscriptionResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = NewPostSubscriptionResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type NodeResolver<R = Maybe<Post>, Parent = NewPostSubscriptionResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type MutationResolver<R = MutationType, Parent = NewPostSubscriptionResponse, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}
/** Return object for mutation operation on multiple nodes */
export namespace BatchPayloadResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = BatchPayload> {
    
    count?: CountResolver<number, TypeParent, Context>;
  }


  export type CountResolver<R = number, Parent = BatchPayload, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}
/** A post's previous values, required in subscription */
export namespace PostPreviousValuesResolvers {
  export interface Resolvers<Context = ./src/context.ts:Context, TypeParent = PostPreviousValues> {
    /** ID */
    id?: IdResolver<string, TypeParent, Context>;
    /** Text content */
    text?: TextResolver<Maybe<string>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = PostPreviousValues, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
  export type TextResolver<R = Maybe<string>, Parent = PostPreviousValues, Context = ./src/context.ts:Context> = Resolver<R, Parent, Context>;
}


export namespace NodeResolvers {
  export interface Resolvers {
    __resolveType: ResolveType;
  }
  export type ResolveType<R = , Parent = {}, Context = ./src/context.ts:Context> = TypeResolveFn<R, Parent, Context>;
  
}
/** MutationResponse interface enables transactional information to be returned in addition to the normal mutation response object */
export namespace MutationResponseResolvers {
  export interface Resolvers {
    __resolveType: ResolveType;
  }
  export type ResolveType<R = 'DeleteAddressMutationResponse' | 'CreatePostMutationResponse' | 'UpdatePostTextMutationResponse' | 'DeletePostMutationResponse' | 'LikePostMutationResponse' | 'SharePostMutationResponse' | 'CreateUserAccountMutationResponse' | 'UpdateUserAccountMutationResponse' | 'NewPostSubscriptionResponse', Parent = DeleteAddressMutationResponse | CreatePostMutationResponse | UpdatePostTextMutationResponse | DeletePostMutationResponse | LikePostMutationResponse | SharePostMutationResponse | CreateUserAccountMutationResponse | UpdateUserAccountMutationResponse | NewPostSubscriptionResponse, Context = ./src/context.ts:Context> = TypeResolveFn<R, Parent, Context>;
  
}


/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, ./src/context.ts:Context>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, ./src/context.ts:Context>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, ./src/context.ts:Context>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}



export interface IResolvers<Context = ./src/context.ts:Context> {
    Query?: QueryResolvers.Resolvers<Context>;
    Address?: AddressResolvers.Resolvers<Context>;
    Post?: PostResolvers.Resolvers<Context>;
    User?: UserResolvers.Resolvers<Context>;
    PostConnection?: PostConnectionResolvers.Resolvers<Context>;
    PageInfo?: PageInfoResolvers.Resolvers<Context>;
    PostEdge?: PostEdgeResolvers.Resolvers<Context>;
    AggregatePost?: AggregatePostResolvers.Resolvers<Context>;
    Mutation?: MutationResolvers.Resolvers<Context>;
    DeleteAddressMutationResponse?: DeleteAddressMutationResponseResolvers.Resolvers<Context>;
    CreatePostMutationResponse?: CreatePostMutationResponseResolvers.Resolvers<Context>;
    UpdatePostTextMutationResponse?: UpdatePostTextMutationResponseResolvers.Resolvers<Context>;
    DeletePostMutationResponse?: DeletePostMutationResponseResolvers.Resolvers<Context>;
    LikePostMutationResponse?: LikePostMutationResponseResolvers.Resolvers<Context>;
    SharePostMutationResponse?: SharePostMutationResponseResolvers.Resolvers<Context>;
    CreateUserAccountMutationResponse?: CreateUserAccountMutationResponseResolvers.Resolvers<Context>;
    UpdateUserAccountMutationResponse?: UpdateUserAccountMutationResponseResolvers.Resolvers<Context>;
    Subscription?: SubscriptionResolvers.Resolvers<Context>;
    NewPostSubscriptionResponse?: NewPostSubscriptionResponseResolvers.Resolvers<Context>;
    BatchPayload?: BatchPayloadResolvers.Resolvers<Context>;
    PostPreviousValues?: PostPreviousValuesResolvers.Resolvers<Context>;
    Node?: NodeResolvers.Resolvers;
    MutationResponse?: MutationResponseResolvers.Resolvers;
}

export interface IDirectiveResolvers<Result> {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
}

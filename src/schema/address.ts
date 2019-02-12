import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    """
    Get an address by ID
    """
    address(where: AddressWhereUniqueInput!): Address
  }

  extend type Mutation {
    """
    Delete an address
    """
    deleteAddress(
      where: AddressWhereUniqueInput!
    ): DeleteAddressMutationResponse!
  }

  """
  Physical address template used in the marketplace
  """
  type Address {
    """
    ID
    """
    id: ID!
    """
    Flat number or building name
    """
    building: String!
    """
    Locality, area, or street
    """
    locality: String!
    """
    City
    """
    city: String!
    """
    Postal Code
    """
    postalCode: String!
    """
    State
    """
    state: String!
    """
    Landmark nearby, optional
    """
    landmark: String

    # Geolocation of the address (https://stackoverflow.com/questions/1196415/what-datatype-to-use-when-storing-latitude-and-longitude-data-in-sql-databases)
    """
    Latitude of this location; constraint: Decimal(9,6)
    """
    latitude: Float
    """
    Longitude of this location; constraint: Decimal(9,6)
    """
    longitude: Float

    """
    Name of the address resident
    """
    recipientName: String!
    """
    Mobile number of the address resident
    """
    recipientMobile: String!
    """
    Alternate mobile number of the address resident
    """
    recipientAlternateMobile: String
    """
    Address type option, available only to a user
    """
    addressType: AddressType!
  }

  """
  Types of addresses for a user
  """
  enum AddressType {
    HOME
    WORK
  }

  # start of payloads
  type DeleteAddressMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    address: Address
  }
  # end of payloads

  # start of input types
  input AddressWhereUniqueInput {
    id: ID
  }

  input AddressWhereInput {
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
    userAddress: UserWhereInput
    AND: [AddressWhereInput!]
    OR: [AddressWhereInput!]
    NOT: [AddressWhereInput!]
  }

  enum AddressOrderByInput {
    id_ASC
    id_DESC
  }

  input AddressCreateOneInput {
    create: AddressCreateInput
    connect: AddressWhereUniqueInput
  }

  input AddressCreateInput {
    building: String!
    locality: String!
    city: String!
    postalCode: String!
    state: String!
    landmark: String
    latitude: Float
    longitude: Float
    recipientName: String!
    recipientMobile: String!
    recipientAlternateMobile: String
    addressType: AddressType!
  }

  input AddressUpdateInput {
    building: String
    locality: String
    city: String
    postalCode: String
    state: String
    landmark: String
    latitude: Float
    longitude: Float
    recipientName: String
    recipientMobile: String
    recipientAlternateMobile: String
    addressType: AddressType
  }
  # end of input types
`;

export default typeDefs;

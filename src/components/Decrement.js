import gql from "graphql-tag";
import React from "react";
import { Mutation } from "react-apollo";

const DECREMENT_COUNTER = gql`
  mutation {
    decrementCounter @client
  }
`;

export default () => (
  <Mutation mutation={DECREMENT_COUNTER}>
    {decrement => <button onClick={decrement}>-</button>}
  </Mutation>
);

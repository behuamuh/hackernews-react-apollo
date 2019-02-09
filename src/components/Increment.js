import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React from "react";

const INCREMENT_COUNTER = gql`
  mutation {
    incrementCounter @client
  }
`;

export default () => (
  <Mutation mutation={INCREMENT_COUNTER}>
    {increment => <button onClick={increment}>+</button>}
  </Mutation>
);

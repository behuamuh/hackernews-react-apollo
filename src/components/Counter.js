import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Decrement from "./Decrement";
import Increment from "./Increment";

const GET_COUNTER = gql`
  {
    counter @client
  }
`;

export default () => (
  <Query query={GET_COUNTER}>
    {({ data, loading, error, client }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;

      const { counter } = data;
      return (
        <>
          <h1>{counter}</h1>
          <Decrement />

          <Increment />
        </>
      );
    }}
  </Query>
);

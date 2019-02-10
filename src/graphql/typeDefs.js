export default `
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    counter: Int
    todos: [Todo]
  }

  type Mutation {
    decrementCounter(unused: Boolean): Int
    incrementCounter(unused: Boolean): Int
    addTodo(text: String!): Todo
    toggleTodo(id: ID!): Todo
  }
`;

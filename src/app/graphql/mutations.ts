import { gql } from "@apollo/client";

export const ADD_EXPENSE = gql`
    mutation AddExpense($description: String!, $category: String!, $amount: Float!) {
        addExpense(description: $description, category: $category, amount: $amount) {
            id
            description
            category
            amount
        }
    }
`;

export const UPDATE_EXPENSE = gql`
    mutation UpdateExpense($id: ID!, $description: String, $amount: Float) {
        updateExpense(id: $id, description: $description, amount: $amount) {
            id
            description
            amount
            category
        }
    }
`;

export const DELETE_EXPENSE = gql`
    mutation DeleteExpense($id: ID!) {
        deleteExpense(id: $id)
    }
`;

/* React */
import gql from "graphql-tag"
import React from 'react';
import { useQuery } from "react-apollo";

/* LabCorp */
import { useStyles } from './Billing.styles';


const query = gql`
  {
    payments {
      description
      id
      title
    }
  }
`;

const Billing = (props) => {
    const classes = useStyles(props);
    const { data, loading, refetch } = useQuery(query);
    if (loading) return "Loading...";

    return (
        <div>
        {data.payments.map(payment => (
            <div key={payment.id}>
            <h1>{payment.title}</h1>
            <h2>{payment.description}</h2>
            </div>
        ))}
        </div>
);
}

export default Billing;
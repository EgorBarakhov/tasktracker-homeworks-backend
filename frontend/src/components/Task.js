import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_TASK = gql`
  query Task($id: ID!) {
    task(id: $id) {
      id
      text
      day
      reminder
    }
  }
`;

function Task({ task, selectTask }) {
  const { loading, error } = useQuery(GET_TASK, {
    variables: { id: task.id }
  });

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return(
    <React.Fragment>
      <div className="flex flex-wrap my-4">
        <button
          className="bg-gray-200 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded"
          onClick={selectTask.bind(this, null)}>
          Back
        </button>
      </div>
      <div className="flex my-4">
        <p>Task <b>{task.text}</b> at: <b>{task.day}</b></p>
      </div>
    </React.Fragment>
  )
}

export default Task;

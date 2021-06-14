import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import CreateTask from './CreateTask';

const GET_TASKS = gql`
  {
    tasks {
      id
      text
      day
      reminder
    }
  }
`;

function Tasks({ selectTask }) {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  function updateTasks(cache, { data: { createTask }}) {
    const { tasks } = cache.readQuery({ query: GET_TASKS });
    cache.writeQuery({
      query: GET_TASKS,
      data: { tasks: tasks.concat([createTask.task]) },
    });
  }

  return(
    <div className="flex flex-wrap items-center pb-16">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Task</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.tasks.map(task => (
              <tr>
                <td>
                  <div key={task.id} className="lg:w-1/3 w-full p-4 text-center inline" onClick={selectTask.bind(this, task)}>
                    <p>{task.text}</p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>{task.day}</p>
                  </div>
                </td>
              </tr>
              ))}
          </tbody>
        </table>

      <CreateTask onCreateTask={updateTasks} />
    </div>
  )
}

export default Tasks;

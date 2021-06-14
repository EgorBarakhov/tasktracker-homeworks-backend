import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_TASK = gql`
  mutation CreateTask($text: String!, $day: String!, $reminder: Boolean!) {
    createTask(input: { text: $text, day: $day, reminder: $reminder }) {
      task {
        id
        text
        day
        reminder
      }
      errors
    }
  }
`;

class CreateTask extends Component {
  state = {
    text: '',
    day: '',
    reminder: false
  }

  onSubmit = (e, createTask) => {
    e.preventDefault();
    createTask({ variables: this.state });
    this.setState({ text: '', day: '', reminder: false });
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_TASK}
        update={this.props.onCreateTask}>
        {createTaskMutation => (
          <div className="lg:fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
            <form className="lg:px-8 pt-2 pb-2" onSubmit={e => this.onSubmit(e, createTaskMutation)}>
              <div className="lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6">
                <h4 className="font-bold lg:pr-4">Create new task</h4>
                <div className="lg:pr-4">
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    value={this.state.text}
                    placeholder="Text"
                    onChange={e => this.setState({ text: e.target.value })} />
                </div>
                <div class="lg:pr-4">
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    value={this.state.day}
                    placeholder="Day"
                    onChange={e => this.setState({ day: e.target.value })} />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
                  Create Task
                </button>
              </div>
            </form>
          </div>

        )}
      </Mutation>
    );
  }
}

export default CreateTask;
module Mutations
  class SetReminder < Mutations::BaseMutation
    argument :id, ID,             required: true
    argument :reminder, Boolean,  required: true

    field :task, Types::TaskType, null: false
    field :errors, [String],      null: false

    def resolve(id:, reminder:)
      task = Task.find_by!(id: id)
      task.update!(reminder: reminder)
      {
        task: task,
        errors: task.errors&.full_messages || []
      }
    end
  end
end

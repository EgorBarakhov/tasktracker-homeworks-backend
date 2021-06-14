module Mutations
  class CreateTask < Mutations::BaseMutation
    argument :text, String,       required: true
    argument :day, String,        required: true
    argument :reminder, Boolean,  required: true

    field :task, Types::TaskType, null: false
    field :errors, [String],      null: false

    def resolve(text:, day:, reminder:)
      task = Task.new(text: text, day: day, reminder: reminder)
      task.save!
      {
        task: task,
        errors: task.errors&.full_messages || []
      }
    end
  end
end

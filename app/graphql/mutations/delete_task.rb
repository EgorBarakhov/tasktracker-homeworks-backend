module Mutations
  class DeleteTask < Mutations::BaseMutation
    argument :id, ID, required: true

    field :errors, [String], null: false

    def resolve(id:)
      task = Task.find_by!(id: id)
      task.destroy!
      {
        errors: task.errors&.full_messages || []
      }
    end
  end
end

module Types
  class MutationType < Types::BaseObject
    field :create_task,   mutation: Mutations::CreateTask
    field :delete_task,   mutation: Mutations::DeleteTask
    field :set_reminder,  mutation: Mutations::SetReminder
  end
end

module Types
  class QueryType < Types::BaseObject
    # # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    # include GraphQL::Types::Relay::HasNodeField
    # include GraphQL::Types::Relay::HasNodesField

    # /tasks
    field :tasks, [Types::TaskType], null: false

    def tasks
      Task.all
    end

    field :task, Types::TaskType, null: false do
      argument :id, ID, required: true
    end

    def task(id:)
      Task.find_by!(id: id)
    end
  end
end

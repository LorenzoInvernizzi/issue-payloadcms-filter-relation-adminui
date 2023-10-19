import { CollectionConfig } from "payload/types";
import Todo from "./Todo";
import TodoCopy from "./TodoCopy";

const Users: CollectionConfig = {
    slug: "users",
    auth: true,
    admin: {
        useAsTitle: "email",
    },
    fields: [
        {
            name: "todos",
            label: "ToDo",
            type: "relationship",
            hasMany: true,
            maxRows: 4,
            relationTo: [Todo.slug, TodoCopy.slug],
            // required: true,
        },
    ],
};

export default Users;

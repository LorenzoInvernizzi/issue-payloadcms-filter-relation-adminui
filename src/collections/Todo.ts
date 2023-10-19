import { CollectionConfig } from "payload/types";

const Todo: CollectionConfig = {
    slug: "todos",
    admin: {
        useAsTitle: "title",
    },
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: "title",
            type: "text",
        },
    ],
};

export default Todo;

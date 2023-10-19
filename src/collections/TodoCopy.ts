import { CollectionConfig } from "payload/types";

const TodoCopy: CollectionConfig = {
    slug: "todosCopy",
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

export default TodoCopy;

import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical"; // beta
import { viteBundler } from "@payloadcms/bundler-vite";

import path from "path";
import TodoLists from "./collections/Todo";
import Users from "./collections/Users";
import TodoCopy from "./collections/TodoCopy";

export default buildConfig({
    serverURL: "http://localhost:3000",
    admin: {
        user: Users.slug,
        bundler: viteBundler(),
    },
    db: mongooseAdapter({
        url: process.env.MONGODB_URI,
    }),
    editor: lexicalEditor({}),

    collections: [TodoLists, Users, TodoCopy],
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts"),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
    },
});

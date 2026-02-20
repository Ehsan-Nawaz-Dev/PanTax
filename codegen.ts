import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  schema: `http://localhost:8080/graphql`,
  documents: "src/graphql/**/*.graphql",
  generates: {
    "./src/generated/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      plugins: [],
      documents: "src/graphql/**/*.graphql",

      config: {
        useTypeImports: true,
        enumsAsConst: true, // <-- generates const objects instead of enum
      },
    },
  },
  config: {
    withHooks: true,
  },
  ignoreNoDocuments: true,
};

export default config;

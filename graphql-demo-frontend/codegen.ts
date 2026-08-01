import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:5296/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts", "!src/generated/**"],
  generates: {
    "src/generated/graphql-types.ts": {
      plugins: ["typescript"],
    },
    "src/generated/graphql.tsx": {
      preset: "import-types",
      presetConfig: {
        typesPath: "./graphql-types",
      },
      plugins: ["typescript-operations"],
    },
  },
};

export default config;
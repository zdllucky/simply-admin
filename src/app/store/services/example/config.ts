import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://petstore3.swagger.io/api/v3/openapi.json",
  apiFile: "./api.ts",
  apiImport: "exampleApi",
  outputFile: "./api.generated.ts",
  exportName: "exampleApi",
  hooks: true,
};

export default config;

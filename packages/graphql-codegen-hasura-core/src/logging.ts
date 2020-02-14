function isNumber(val: string) {
  return val && val !== "" && !isNaN(parseInt(val));
}

const logLevel =
  (process &&
    process.env["REACT_APP_GRAPHQL_CODEGEN_HASURA_LOGLEVEL"] &&
    isNumber(process.env["REACT_APP_GRAPHQL_CODEGEN_HASURA_LOGLEVEL"]) &&
    parseInt(process.env["REACT_APP_GRAPHQL_CODEGEN_HASURA_LOGLEVEL"])) ||
  0;

export function getLogLevel() {
  return logLevel;
}

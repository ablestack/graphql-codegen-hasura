"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogLevel = void 0;
function isNumber(val) {
    return val && val !== "" && !isNaN(parseInt(val));
}
const logLevel = (process &&
    process.env["REACT_APP_GRAPHQL_CODEGEN_HASURA_LOGLEVEL"] &&
    isNumber(process.env["REACT_APP_GRAPHQL_CODEGEN_HASURA_LOGLEVEL"]) &&
    parseInt(process.env["REACT_APP_GRAPHQL_CODEGEN_HASURA_LOGLEVEL"])) ||
    0;
function getLogLevel() {
    return logLevel;
}
exports.getLogLevel = getLogLevel;
//# sourceMappingURL=logging.js.map
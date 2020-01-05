let config = require('./config/dev.json');

switch (process.env.REACT_APP_SECRET_API) {
    case "local":
        config = require("./config/local.json");
        break;
    case "dev":
        config = require("./config/dev.json");
        break;
    case "test":
        config = require("./config/test.json");
        break;
    case "pre":
        config = require("./config/pre.json");
        break;
    case "prod":
        config = require("./config/prod.json");
        break;
    default:
        break;
}

export default config;
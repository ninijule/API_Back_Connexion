"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
try {
    (async () => {
        await sequelize.authenticate();
    })();
    console.log("Connection to SQL Server has been established successfully.");
}
catch (error) {
    console.log("Connection to SQL Server failed: ", error);
}
exports.default = sequelize;
//# sourceMappingURL=index.js.map
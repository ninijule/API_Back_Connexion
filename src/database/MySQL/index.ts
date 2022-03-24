import { Sequelize } from "sequelize";

const sequelize = new Sequelize('test', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
});

try {
    (async () => {
        await sequelize.authenticate();
    })();
    console.log("Connection to SQL Server has been established successfully.");
} catch (error) {
    console.log("Connection to SQL Server failed: ", error);
}

export default sequelize;

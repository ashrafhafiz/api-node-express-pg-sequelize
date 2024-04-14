const db = require("./models/index");

// db.sequelize
//   .authenticate()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// console.log(db);

db.sequelize
  .sync({ alter: true })
  .then(() => console.log("Synced..."))
  .catch((err) => console.log(err));

// const getUSers = async () => {
//   const users = await db.users.findAll({ order: ["id"] });
//   users.map((user) => console.log(user.toJSON()));
// };

// getUSers();

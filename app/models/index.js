var mongoose = require("mongoose");
import User from "./user";
// var beautifyUnique = require("mongoose-beautiful-unique-validation");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(res => console.log("mongoose=======connection", res))
  .catch(e => console.warn("mongoose error", e));

// var user = require('./models/user');

// user.plugin(beautifyUnique);

// var database = {
//   "user": mongoose.model("user", user),
// }
// module.exports = database;
export default {
  User
};

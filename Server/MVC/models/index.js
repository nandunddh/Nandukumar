const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname:{
    type: String
  },
  lastname:{
    type: String
  },

},
{
  versionKey: false,
  toJSON:{
    transform(doc, res){
      delete res.__v;
    }
  }

  // timestamps: 
}
);
// module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("user", UserSchema);
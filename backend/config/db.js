const mongoose = require("mongoose");

mongoose
   .connect(`mongodb+srv://${process.env.DB}/blackjack`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log("Connection to MongoDB successful !"))
   .catch((e) => console.log("Connection to MongoDB failed !", e));

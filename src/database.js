import mongoose from "mongoose";
import {MONGODB_URI} from './config'

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
  })
  .then((db) => console.log(`DB connected ${db.connection.name}`))
  .catch((error) => console.log(error));

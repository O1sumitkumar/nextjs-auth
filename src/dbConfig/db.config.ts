import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connected = mongoose.connection;
    connected.on("connected", () => {
      console.log("MongoDB connected");
    });
    connected.on(
      "error",
      console.error.bind(console, "MongoDB connection error:")
    );
    console.log("Connected to database");
  } catch (error) {
    console.log("Error in connecting to database");
    console.log(error);
    process.exit(1);
  }
};

export default connect;

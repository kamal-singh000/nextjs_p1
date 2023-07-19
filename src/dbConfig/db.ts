import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const conn = mongoose.connection;
    conn.on("connected", () => {
      console.log("MONGODB connected successfully");
    });
    conn.on("error", (err) => {
      console.log(
        "MONGODB connection error. Please make sure MongoDB is running",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

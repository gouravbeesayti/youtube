import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Use async because the DB is in another continent
const connectDB = async () => {
    try {
        // Ensure MONGODB_URI is defined
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        // Connect to the database
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure code
    }
};

// Handle database disconnection
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the connectDB function
export default connectDB;

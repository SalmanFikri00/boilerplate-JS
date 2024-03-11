import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB)
        console.log(`connected on host ${conn.connection.host}`)
    }catch(error){
        console.log(error.massage)
        process.exit(1)
    }
} 

export default connectDB
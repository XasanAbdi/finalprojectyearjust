import mongoose from 'mongoose'

const connectDB=()=>{
    mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        console.log('Database is connect')
    })
}

export default connectDB
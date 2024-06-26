import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({

  username:{
    type:String,
    reguired: true,
    unique: true,
  },
  email: {
    type:String,
    reguired: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },  
  phone: {
    type: String,
    required: false,
  },  
  desc: {
    type: String,
    required: false,
  },
  isSeller: {
    type: Boolean,
    sefault:false
  }

},
{
    timetamps:true
});

export default mongoose.model("User",userSchema);
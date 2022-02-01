const errorHandling =(error,req,res,next)=>{
    res.status(error.status ||500).json({message:error.message||"Internal Server Error"});
  }
  module.exports = errorHandling;
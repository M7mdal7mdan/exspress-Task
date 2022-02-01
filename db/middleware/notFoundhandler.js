const notFoundhandler = (req,res,next)=>{
    res.status(404).json({message: "URL not Found"})
    next()
  }

  module.exports = notFoundhandler;
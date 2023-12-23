const app=require('./app');
const port=7050;
app.listen(port,()=>{
    console.log("server created at port: "+port);
})
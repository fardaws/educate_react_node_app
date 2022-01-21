//import application
const app=require('./backend/app'); 


//rend l'app a l'ecoute 
app.listen(3001,()=>{
    console.log("app is listen on port 3001");
})
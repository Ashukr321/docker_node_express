import express from 'express';
const port = process.env.PORT || 5500;


const app = express();

app.get('/', (req, res) => {
  res.status(200).json({message:"success",status:"200",server_type:"docker node server"});
});


app.listen(port, () => {
  console.log(`server is listening on port :${port}`);
})

import express from 'express';
const port = process.env.PORT || 5500;


const app = express();

app.get('/', (req, res) => {
  res.status(200).json({message:"success",status:"200",server_type:"docker node server",bugfix:" thanku sneha ji "});
});


app.listen(port, () => {
  console.log(`server is listening on port :${port}`);
})

// docker run --rm --name node_express -p 5500:5500 -v ${PWD}:/app docker_express
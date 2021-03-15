import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'client'))
app.use(express.static('client/assets'))







app.get('/', (req, res) => {

   return res.render('index')
	
});


app.get('/what_we_do', (req, res) => {

   return res.render('src/what_we_do')
	
})








app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});
import express from "express"
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/",(request,response) =>{
   response.render("index",{title:"Case Converter",active:"Enter text here..."});
});
app.listen(port, () => console.info(`Listening on port ${port}`));
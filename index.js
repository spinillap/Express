import express from 'express';
const app = express();

// Configurar EJS como el motor de visualización
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('Hello People!');
});

app.get('/',function(req,res){
  res.render('index', { title: 'Mi página web' });
});

app.get('/',function(req,res){
  res.render('Pages/index');
});

// Agregar rutas /
app.get('/about',(req,res) =>{
  res.render('index');
});

app.get('/contact',(req,res) =>{
  res.send('This is contact page');
});


/*
/ Plantillas EJS
Embedded
JavaScript

Motor de plantilas utilizado en aplicaciones Node.js. 
Permite crear plantillas HTML con un código mínimo.
Muy útil para generar vistas dinámicas.
*/


app.listen(3000, () => {
  console.log('Express server initialized');
});

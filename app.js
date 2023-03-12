let express=require('express');
let app=express();
let port=process.env.PORT || 3000;
app.use('/assets', express.static(__dirname+'/public'));
app.use('/',function (req, res, next){console.log('Request URL:' + req.url),next()});
app.set('view engine', 'ejs');
app.listen(port);

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});

app.get('/person/:id', function (req, res) {
    res.render('person', {ID:req.params.id});
});

let data = [
    {id:1, nombre: 'Luis', apellido: 'Nava', edad:20},
    {id:2, nombre: 'Diego', apellido: 'Olivera', edad:20},
    {id:3, nombre: 'René', apellido: 'Sanchez', edad:26}
]
app.get('/personas',  (req, res) => {
    res.render('tablaPersonas', {data})
});
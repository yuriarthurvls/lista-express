const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Ex 2
app.get('/sobre', (req, res) => {
    res.send('Esta é uma aplicação feita com Express.js');
});

// Ex 3
app.get('/contato', (req, res) => {
    res.json({
        email: 'contato@email.com',
        telefone: '(81) 99999-9999'
    });
});

// Ex 4
app.get('/erro', (req, res) => {
    res.status(404).send('Página não encontrada');
});

// Ex 5
app.get('/inicio', (req, res) => {
    res.redirect('/');
});

// Ex 6
app.get('/usuarios/:id', (req, res) => {
    res.send(`Usuário ${req.params.id}`);
});

// Ex 7
app.get('/produtos/:nome', (req, res) => {
    res.send(`Produto: ${req.params.nome}`);
});

// Ex 8
app.get('/filmes/:id/:nome', (req, res) => {
    res.send(`ID do filme: ${req.params.id} | Nome do filme: ${req.params.nome}`);
});

// Ex 9
app.get('/buscar', (req, res) => {
    res.send(`Buscando por: ${req.query.nome}`);
});

// Ex 10
app.get('/produtos', (req, res) => {
    res.send(`Categoria: ${req.query.categoria} | Página: ${req.query.pagina}`);
});

// Ex 11
app.get('/usuarios', (req, res) => {
    res.send(`Filtrando usuários com idade ${req.query.idade}`);
});

// Ex 12
app.get('/home', (req, res) => {
    res.render('home');
});

// Ex 13
app.get('/perfil', (req, res) => {
    res.render('perfil', {
        nome: 'Yuri',
        idade: 17
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// Ex 14
app.get('/lista-filmes', (req, res) => {
    const filmes = [
        { nome: 'Vingadores', ano: 2019 },
        { nome: 'Avatar', ano: 2022 },
        { nome: 'Batman', ano: 2022 }
    ];

    res.render('filmes', { filmes });
});

// Ex 15
app.get('/condicional', (req, res) => {
    res.render('condicional', {
        logado: true,
        admin: false
    });
});

// Ex 16
app.get('/filmes', (req, res) => {
    const filmes = [
        { nome: 'Avatar', ano: 2009 },
        { nome: 'Vingadores', ano: 2019 },
        { nome: 'Titanic', ano: 1997 }
    ];

    res.render('filmes', { filmes });
});
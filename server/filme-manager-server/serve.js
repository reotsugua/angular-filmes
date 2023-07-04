const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/filmes').get((request, response) => {
  response.send(FILMES);
});

app.route('/api/filmes').post((request, response) => {
  let filme = request.body;

  const firstId = FILMES ? Math.max.apply(null, FILMES.map(filmeIterator => filmeIterator.id)) + 1 : 1;
  filme.id = firstId;
  FILMES.push(filme);
  

  response.status(201).send(filme);
});

app.route('/api/filmes/:id').put((request, response) => {
  const filmeId = +request.params['id'];
  const filme = request.body;

  const index = FILMES.findIndex(filmeIterator => filmeIterator.id === filmeId);
  FILMES[index] = filme;

  response.status(200).send(filme);
});

app.route('/api/filmes/:id').get((request, response) => {
  const filmeId = +request.params['id'];

  response.status(200).send(FILMES.find(filmeIterator => filmeIterator.id === filmeId));
});

app.route('/api/filmes/:id').delete((request, response)=> {
  const filmeId = +request.params['id'];
  FILMES = FILMES.filter(filmeIterator => filmeIterator.id !== filmeId);
  
  response.status(204).send({});
});

var FILMES = [
    {
        id: 1,
        name: 'Homem de Ferro',
        releaseDate: 'November 25, 2019',
        comment: 'Neste filme, os monstros irão obter ...',       
        rating: 4.2,
        imageUrl: '/assets/images/fundo.png',
    },
    {
        id: 2,
        name: 'Homem Aranha',
        releaseDate: 'November 25, 2019',
        comment: 'Neste filme, os monstros irão obter ...',       
        rating: 4.5,
        imageUrl: '/assets/images/fundo.png',
    },
    {
        id: 3,
        name: 'Capitão America',
        releaseDate: 'November 25, 2019',
        comment: 'Neste filme, os monstros irão obter ...',       
        rating: 4,
        imageUrl: '/assets/images/fundo.png',
    },
    {
        id: 4,
        name: 'Antiman',
        releaseDate: 'November 25, 2019',
        comment: 'Neste filme, os monstros irão obter ...',       
        rating: 3.8,
        imageUrl: '/assets/images/fundo.png',
    },
    {
        id: 5,
        name: 'Vingadores',
        releaseDate: 'November 25, 2019',
        comment: 'Neste filme, os monstros irão obter ...',       
        rating: 5,
        imageUrl: '/assets/images/fundo.png',
    },
    {
        id: 6,
        name: 'Thor',
        releaseDate: 'November 25, 2019',
        comment: 'Neste filme, os monstros irão obter ...',       
        rating: 2.7,
        imageUrl: '/assets/images/fundo.png',
    },
    {
        id: 7,
        name: 'Doctor Strange',
        releaseDate: 'November 25, 2019',
        comment: 'Neste filme, os monstros irão obter ...',       
        rating: 4.1,
        imageUrl: '/assets/images/fundo.png',
    }
];

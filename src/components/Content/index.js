import React, { Component } from 'react';
import Post from '../Post';
import './style.css';
import Img1 from '../../../assets/images/zebonitinho.jpg';
import Img2 from '../../../assets/images/didi.jpeg';
import Xuxa from '../../../assets/images/xuxa.jpeg';
import Coitadinho from '../../../assets/images/coitadinho.jpeg';
import Betina from '../../../assets/images/betina.jpg';
import Irineu from '../../../assets/images/irineu.jpeg';
import Nerdao from '../../../assets/images/nerdao.jpg';
import Maria from '../../../assets/images/maria.jpeg';

class Content extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Zé Bonitinho',
        avatar: Img1,
        text: 'Pessoal! Alguém sabe se no céu tem pão?',
        date: '10 JUN 2019',
        comments: [
          {
            id: 1,
            name: 'Didi Mocó',
            avatar: Img2,
            text:
              'Eu não sei quem inventou essa história. É uma brincadeira de mau gosto. Essa pessoa que fez isso deveria ser presa. Meus advogados vão procurar saber quem fez isso. Mas essas pessoas não existem para mim. Nem estou levando isso em consideração',
          },

          {
            id: 2,
            name: 'Xuxa',
            avatar: Xuxa,
            text:
              'Para quem não lembra, Renato Aragão participou no início dos anos 2000 do quadro Intimidade, no antigo Planeta Xuxa, da Globo. No programa, ele contou a história de uma criança que passava muita fome no Nordeste e que seria um dos motivos para ele criar a ação conhecida como Criança Esperança, que existe até hoje. ',
          },
        ],
      },
      {
        id: 2,
        name: 'Gato de Botas',
        avatar: Coitadinho,
        text: 'Por que ninguém comenta nos meus posts?',
        date: '09 JUN 2019',
      },

      {
        id: 3,
        name: 'Bettina',
        avatar: Betina,
        text:
          'Oi, meu nome é Bettina, eu tenho 22 anos e 1 milhão e 42 mil reais de patrimônio acumulado',
        date: '09 JUN 2019',
        comments: [
          {
            id: 1,
            name: 'Irineu',
            avatar: Irineu,
            text: 'Meu nome é Irineu, você não sabe nem eu.',
          },

          {
            id: 2,
            name: 'Nerdão',
            avatar: Nerdao,
            text:
              'Daqui a 15 anos, nossa heroína terá 37 anos de idade e um patrimônio de 157 quintilhões de reais:  2 milhões de vezes o PIB americano de 2018 e 316 milhões de vezes a fortuna Jeff Bezzos - homem mais rico do mundo segundo a Forbes.',
          },
          {
            id: 3,
            name: 'Maria do Rosário',
            avatar: Maria,
            text: 'Mas o que que é isso? Mas o que que é isso aqui?',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div id="content">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default Content;

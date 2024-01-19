let voltar = document.querySelector('#voltar');

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ['Amor da minha vida,'];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector('#title').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    } else {
      // Adicionamos uma condição extra para garantir que a animação seja encerrada corretamente
      document.querySelector('#linda').innerHTML = '';
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    } else {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = [
    'Da nossa viagem horrível pra Camaquã, que aguentamos juntos.',
    'De todas as partidas que eu feedei no Lol, com muito amor no coração.',
    'De todos nossos sustos achando que seríamos papais, e do nosso carnaval, que quase levou a isso…',
    'Da nossa experiência comendo brisadeiro, que me levou a uma crise de riso e te fez escrever 8 páginas de amor.',
    'Da nossa ida à Fenadoce com direito a pizzaria em Pelotas!',
    'Do dia em que tu desenhou um P na bolacha com ketchup e foi a coisa mais fofa.',
    'Das nossas crises de riso depois de tu confundir chouriço com ouriço.',
    'Nossa viagem pra Gramado contigo cheia de dor :(.',
    'Do nosso jantar a luz de velas porque a luz morreu.',
    'Do nosso lanche com vinho que acabou em tragédia.',
    'Da nossa ida ao Le Petit e ao rodízio de hambúrguer, comendo quilos.',
    'Da gente começando Hora de Aventura juntinhos, algo que tornou esse desenho muito valioso pra mim, e que me marcou muito.',
    'Do dia que tu me levou um ovo cozido no carro com muito amor e carinho.',
    'Do dia que a gente descobriu que JÁ TÍNHAMOS UMA FOTO JUNTOS.',
    'Dos nossos 15 mil almocinhos juntos, com direito a sapecagens e muitas sonecas.',
    'De todos os conselhos e ajudinhas que tu já me deu.',
    'Do dia que eu fui contigo vestida de fantasma pro IF!',
    'Da mãe da tua colega achando que eu sou professor de educação física.',
    'De tu indo assistir todos meus jogos e caminhando MUITO comigo no dia do Intercursos!',
    'De todos os nossos bluesberries e saidinhas no Cassino, com sorvetes, açaís e tortinhas.',
    'De coisas mais recentes como a gente estudando matemática e o aniversário do Pedro.',
    'DO MEU PRESENTE LINDO DE NATAL E TODOS OS PRESENTINHOS QUE TU JÁ ME DEU.',
    'De todas as cartinhas de amor lindas e que me fizeram chorar rios.',
    'De todas as vezes que eu olho pra ti e minha única reação é chorar porque eu não consigo entender como é possível uma pessoa ser tão maravilhosa, e muito menos como essa pessoa é minha namorada e me ama.',
    'De como eu amo toda vez que eu te faço rir por algo bobo.',
    'Das vezes que a gente fez comida e docinhos juntos.',
    'Das vezes que eu passei o intervalo contigo no IF, comendo salgadinhos da Pimpão',
    'Dos momentos em que tu sentiu qualquer incomodo e eu quase morri de pena',
    'Do teu olhar, sorrindo',
    'De como eu te amo até quando eu tô bravo ou chateado',
    'De como teu carinho cura tudo que eu possa sentir',
    'De como tu melhora todos os dias a minha vida em maneiras que tu nem percebe',
    'De como eu te amo.',
  ];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector('#text').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (i === dataText.length) {
      i = 0; // Reset to the beginning
    }

    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = [
    'minha linda',
    'minha zangada',
    'meu amor',
    'minha franjuda',
    'minha peituda metida',
    'minha xerosa',
    'meu amogus peitudo',
    'meu bem',
    'minha ESMERALDA',
    'minha gostosa',
    'minha valoranter',
    'meu dengo',
    'minha dona',
    'minha loba',
    'minha coxudinha',
    'meu Brimstone',
    'amor da minha vida',
    'meu neném',
    'minha flowers',
    'minha esposa',
  ];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector('#linda').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    } else {
      // Adicionamos uma condição extra para garantir que a animação seja encerrada corretamente
      document.querySelector('#linda').innerHTML = '';
    }
  }

  function StartTextAnimation(i) {
    if (i === dataText.length) {
      i = 0; // Reset to the beginning
    }

    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    } else {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

voltar.addEventListener('click', () => {
  voltar.classList.add('jello');

  voltar.setAttribute('disabled', '');

  setTimeout(() => {
    voltar.classList.remove('jello');
  }, 600);
  setTimeout(() => {
    voltar.removeAttribute('disabled');
  }, 2000);
});

//Fonte braile para ser enbedad ao seu html

// FonteBraile.js

// Função para incorporar a fonte braile.ttf ao CSS do documento
//function embedBrailleFont() {
    // Cria um novo estilo
//    var style = document.createElement('style');
//    style.appendChild(document.createTextNode(''));

    // Adiciona a regra CSS para aplicar a fonte braile.ttf a todos os elementos do HTML
//    style.innerHTML = `
//        @font-face {
            
//            src: url('braile.ttf');
//            font-weight: normal;
//            font-style: normal;
 //       }
//    `;

    // Adiciona o estilo ao cabeçalho do documento (head)
//    document.head.appendChild(style);
//}

// Chama a função para incorporar a fonte braile.ttf ao CSS assim que o script é carregado
//embedBrailleFont();



(function() {
  // Carrega a fonte Braille
  var fontFace = new FontFace('Braille', 'url(Braile_font.ttf)');
  fontFace.load().then(function(font) {
    document.fonts.add(font);

    // Define a fonte Braille como padrão para todos os elementos de texto
    var style = document.createElement('style');
    style.textContent = 'body * { font-family: "Braille", sans-serif; }';
    document.head.appendChild(style);
  });
})();

(function() {
  // Carrega a fonte Braille
  var fontFace = new FontFace('Braille', 'url(Braile.ttf)');
  fontFace.load().then(function(font) {
    document.fonts.add(font);

    // Define a fonte Braille como padrão para todos os elementos de texto
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element.nodeType === Node.TEXT_NODE) {
        var span = document.createElement('span');
        span.style.fontFamily = 'Braille';
        span.textContent = element.textContent;
        element.parentNode.replaceChild(span, element);
      }
    }
  });
})();



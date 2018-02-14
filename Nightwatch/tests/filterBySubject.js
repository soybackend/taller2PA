module.exports = {
  'Filtrar Por Materia': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.buscador', 4000)
      .click('.buscador')
      .setValue('.buscador input[role="combobox"]', 'Mario Villamizar')
      .waitForElementVisible('.is-focused', 4000)
      .click('.is-focused')
      .waitForElementVisible('.nombreProfesor', 4000)
      .click('.labelHover>input')
      .assert.containsText('.labelHover>a', 'Algoritmica')
      .end();
  }
};

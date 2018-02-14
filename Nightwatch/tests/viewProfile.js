module.exports = {
  'Ver Perfil de Profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.buscador', 4000)
      .click('.buscador')
      .setValue('.buscador input[role="combobox"]', 'Mario Villamizar')
      .waitForElementVisible('.is-focused', 4000)
      .click('.is-focused')
      .waitForElementVisible('.nombreProfesor', 4000)
      .assert.containsText('.nombreProfesor', 'Mario Villamizar')
      .end();
  }
};

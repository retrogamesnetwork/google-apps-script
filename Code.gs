function onOpen() {
  SlidesApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Tanners Addons!')
      .addItem('Run 3', 'run3')
      .addItem('Super Smash Bros', 'superSmashBros')
      .addItem('Open Chat', 'openChat')
      .addToUi(); 
}

function run3() {
  var html = HtmlService.createHtmlOutputFromFile('run3')
      .setWidth(1000)
      .setHeight(900);
  SlidesApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Playing RUN 3');
}

function superSmashBros() {
  var html = HtmlService.createHtmlOutputFromFile('ssb')
      .setWidth(1000)
      .setHeight(900);
  SlidesApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Playing SUPER SMASH BROS');
}

function openChat() {
  var html = HtmlService.createHtmlOutputFromFile('chat')
      .setWidth(1000)
      .setHeight(900);
  SlidesApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Chat');
}

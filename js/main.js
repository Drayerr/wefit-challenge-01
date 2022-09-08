$(document).ready(function () {
  // Transpondo itens do header-menu para horizontal
  $('.btn-group-vertical').removeClass('btn-group-vertical')

  // Formatando texto e background-color do header
  $('.jumbotron').addClass(['bg-secondary', 'text-right', 'text-light'])
  // Substituindo classe do botão "Learn more"
  $('.jumbotron .btn').toggleClass(['btn-primary', 'btn-success'])

  //TODO
  // Reorganização dos cards
  // $(".col-lg-3 .card-title:contains('Animais')").insertAfter('.row .col-lg-12')

  // Substituindo classes do botão "Go somewhere" no card de "Animais"
  $(".col-lg-3 .card-title:contains('Animais')")
    .closest('.card-body')
    .find('.btn-primary')
    .toggleClass(['btn-primary', 'btn-success'])

  // Tirando a class active do primeiro item
  $(".container .col-lg-4 .list-group .list-group-item:contains('Primeiro item')")
    .removeClass('active')

  // Adicionando quarto e quinto item no final da lista
  $('.container .col-lg-4 .list-group')
    .append([
      '<li class="list-group-item active">Quarto item</li>',
      '<li class="list-group-item">Quinto item</li>'
    ])
})
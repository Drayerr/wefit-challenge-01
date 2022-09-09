$(document).ready(function () {
  // Transpondo itens do header-menu para horizontal
  $('.btn-group-vertical').removeClass('btn-group-vertical')

  // Formatando texto e background-color do header
  $('.jumbotron').addClass(['bg-secondary', 'text-right', 'text-light'])
  // Substituindo classe do botão "Learn more"
  $('.jumbotron .btn').toggleClass(['btn-primary', 'btn-success'])


  // Criando classe cards para referenciar
  $(".col-lg-3 .card-title:contains('Animais')")
    .closest('.row')
    .addClass('cards')

  // Criando divs auxiliares para substituição das tags
  $('.container .cards')
    .append([
      '<div class="auxiliar1"></div>',
      '<div class="auxiliar2"></div>',
      '<div class="auxiliar3"></div>',
      '<div class="auxiliar4"></div>'
    ])

  // Adicionando classes para referência
  $(".col-lg-3 .card-title:contains('Animais')")
    .closest('.col-lg-3')
    .addClass('animais')
  $(".col-lg-3 .card-title:contains('Tecnologia')")
    .closest('.col-lg-3')
    .addClass('tecnologia')
  $(".col-lg-3 .card-title:contains('Pessoas')")
    .closest('.col-lg-3')
    .addClass('pessoas')
  $(".col-lg-3 .card-title:contains('Natureza')")
    .closest('.col-lg-3')
    .addClass('natureza')

  // Alterando a ordem de exibição dos cards
  $('.container .row').find('.auxiliar1').replaceWith($('.container .row').find('.natureza'))
  $('.container .row').find('.auxiliar2').replaceWith($('.container .row').find('.animais'))
  $('.container .row').find('.auxiliar3').replaceWith($('.container .row').find('.pessoas'))
  $('.container .row').find('.auxiliar4').replaceWith($('.container .row').find('.tecnologia'))

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
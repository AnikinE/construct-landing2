$(function(){

  const modalCall = $('[data-modal]');
  const modalClose = $('[data-close]');

  modalCall.on('click', function(event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    $(modalId).addClass('show');
    $('body').addClass('no-scroll');
  })

  modalClose.on('click', function(event) {
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents('.modal');
    modalParent.removeClass('show');
    $('body').removeClass('no-scroll');
  });

  $('.modal').on('click', function(event) {
    $(this).removeClass('show');
    $('body').removeClass('no-scroll');
  });

  $('.modal__dialog').on('click', function(event) {
    event.stopPropagation();
  });


  /* Menu */
  const navToggle = $('#navToggle'); 
  const nav = $('#nav'); 

  navToggle.on('click', function(event) {
    event.preventDefault();
    nav.toggleClass('open');
  });

});
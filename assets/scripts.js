var pop1 = document.getElementById('pop1')
var pop2 = document.getElementById('pop2')
const pop1Append = (message, type) => {
  const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-secondary alert-dismissable" role="alert">`,
      `    <div class="row">`,
      `    <div class="col text-start" style="text-wrap:nowrap;">${message}</div>`,
      '    <div class="col text-end">',
      '    <button type="button" class="btn btn-close" data-bs-dismiss="alert" aria-label="close"></button> ' ,
      '</div>',
      '</div>', 
      '</div>'
      ].join('')
    pop1.append(wrapper)
}
const pop2Append = (message, type) => {
  const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-secondary alert-dismissable" role="alert">`,
      `    <div class="row">`,
      `    <div class="col text-start" style="text-wrap:wrap;">${message}</div>`,
      '    <div class="col text-end">',
      '    <button type="button" class="btn btn-close" data-bs-dismiss="alert" aria-label="close"></button> ' ,
      '</div>',
      '</div>', 
      '</div>'
      ].join('')
    pop2.append(wrapper)
}
var fran1 = document.getElementById('fran1')
var contact1 = document.getElementById('contact1')
var fran2 = document.getElementById('fran2')
var contact2 = document.getElementById('contact2')
var cart1 = document.getElementById('cart1')
var cart2 = document.getElementById('cart2')

function click1(){
  fran1.addEventListener('click', pop1Append("Our franchising team is currently on break.", 'success'))
}
function click2(){
  contact1.addEventListener('click', pop1Append("Customer support is currently unavailable.", 'success'))
}

function click3(){
  fran2.addEventListener('click', pop2Append("Our franchising team is currently on break.", 'success'))
}

function click4(){
  contact2.addEventListener('click', pop2Append("Customer support is currently unavailable.", 'success'))
}

function click5(){
  cart1.addEventListener('click', pop1Append("My Cart is currently under maintenance.", 'success'))
}

function click6(){
  cart2.addEventListener('click', pop2Append("My Cart is currently under maintenance.", 'success'))
}
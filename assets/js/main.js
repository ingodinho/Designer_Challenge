'use strict';

const subscribe = document.querySelector('.subscribe');
const email = document.getElementById('mail');

function subscribeModal() {
  console.log(email.value);
  subscribe.classList.remove('hidden');
  email.value = '';
}

function subscribeModalHidden() {
  subscribe.classList.add('hidden');
}

document.body.addEventListener('click', subscribeModalHidden);
document.body.addEventListener('keydown',function(e) {
  if (e.key === 'Escape') {
    subscribeModalHidden()
  }
})
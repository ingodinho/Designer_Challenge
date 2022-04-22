'use strict';

const subscribe = document.querySelector('.subscribe');
const email = document.getElementById('mail');
const overlay = document.querySelector('.overlay');

function subscribeModal() {
  console.log(email.value);
  subscribe.classList.remove('hidden');
  overlay.classList.remove('hidden');
  email.value = '';
}

function subscribeModalHidden() {
  subscribe.classList.add('hidden');
  overlay.classList.add('hidden');
}

overlay.addEventListener('click', subscribeModalHidden);
document.body.addEventListener('keydown',function(e) {
  if (e.key === 'Escape') {
    subscribeModalHidden()
  }
})
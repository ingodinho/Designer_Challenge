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
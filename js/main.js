'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    // inputを取得
    const text = document.querySelector('input');

    // inputの中身が空だったらliを追加しない
    if (text.value === '') {
      return;
    }

    // liを作成
    const flex = document.getElementById('flex');
    const check = document.createElement('input');
    check.setAttribute('type','checkbox');
    check.classList.add('checkbox');
    const li = document.createElement('li');
    li.classList.add('todo');

    // liの中身をinputの内容に
    li.textContent = text.value;

    // ulを取得、liを子要素に追加
    document.querySelector('#flex').appendChild(check);
    document.querySelector('#flex').appendChild(li);

    // inputの中身を空にする
    text.value = '';

  })

  var delate = document.createElement('button');
  delate.addEventListener('click', () => {
    delateTodo(index);
  })

  function delateTodo(index) {
    li.splice(index,1);
  }

}
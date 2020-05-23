'use strict';

{
  document.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
    // 入力内容を取得
    const text = document.querySelector('input');

    // 入力が空だったらliを追加しない
    if (text.value === '') {
      return;
    }

    // ゴミ箱を作成
    const garbage = document.createElement('button');
    garbage.classList.add('delete');
    // チェックボックスを作成
    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    input.classList.add('checkbox');
    // liを作成
    const li = document.createElement('li');
    li.classList.add('todo');

    // liの中身をinputの内容に
    li.textContent = text.value;

    // ulを取得、liを子要素に追加
    // liにチェックボックスを追加
    // inputにゴミ箱を追加
    document.querySelector('ul').appendChild(li);
    document.querySelector('ul > li:last-child').appendChild(input);
    document.querySelector('ul > li:last-child').appendChild(garbage);
    const comp = document.getElementById('complete');

    // inputの中身を空にする
    text.value = '';

  }

    input.addEventListener('click', () => {
      if (li.classList.contains('hidden') === false) {
        li.classList.toggle('hidden');
        li.style.opacity = 0.3;
        comp.appendChild(li);
      } else {
        li.classList.remove('hidden');
        li.style.opacity = 1;
        document.querySelector('ul').appendChild(li);
      }
    })

    garbage.addEventListener('click', () => {
      li.remove();
    })
  })

}
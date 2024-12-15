const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'C') {
      // クリア
      display.value = '';
    } else if (value === '=') {
      // 計算結果を表示
      try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
      } catch {
        display.value = 'Error';
      }
    } else {
      // 入力値を追加
      display.value += value;
    }
  });
});

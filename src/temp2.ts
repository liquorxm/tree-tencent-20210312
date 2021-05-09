window.A274075A=async function({a}){return new Promise(_=>setTimeout(__=>_(a[0]),500))}


let token2 = '000004326FC8751A327D8934BD5FA094';


async function tree(token) {
  try {
    show('准备中');
    const pull = await (await fetch(`${cgi}/pull?u=${token}`)).json();

    if (!pull.c || !pull.t) {
      throw pull;
    }

    show('种植中');
    const val = await (await run(pull.c))(pull);

    show('浇水中');
    const push = await (await fetch(`${cgi}/push?t=${pull.t}&a=${val}`)).json();

    if (!push.success) {
      throw push;
    }

    show('成功种下一棵树');
    counter(push.score);
  } catch (e) {
    alert(typeof e == 'object' && e.error ? e.error : '发生了一些错误，请稍后重试。');
  }

  done();
}



temp1.addEventListener('click', function () {
  tree2(token2);
});


let i = 0;
let timer = setInterval(() => {
  temp1.click();
  ++i;
}, 500);

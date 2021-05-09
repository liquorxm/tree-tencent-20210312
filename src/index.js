const fetchUrl = require('fetch').fetchUrl;
const fun04 = require('./04').fun04;
const fun05 = require('./05').fun05;


// fetchUrl('http://159.75.70.9:8081/pull?u=000004326FC8751A327D8934BD5FA094', (error, meta, pull) => {
//   console.log(body.toString());
// });

const request = (url) => {
  return new Promise((resolve) => {
    // resolve(url);
    fetchUrl(url, (error, meta, body) => {
      resolve(JSON.parse(body.toString()));
    });
  });
};

const formatBody = () => {};

// const pull = request('http://159.75.70.9:8081/pull?u=000004326FC8751A327D8934BD5FA094');

var _0xe936 = ['A5473788'];
(function (_0x48e85c, _0xe936d8) {
  var _0x23fc5a = function (_0x2858d9) {
    while (--_0x2858d9) {
      _0x48e85c['push'](_0x48e85c['shift']());
    }
  };
  _0x23fc5a(++_0xe936d8);
})(_0xe936, 0x196);
var _0x23fc = function (_0x48e85c, _0xe936d8) {
  _0x48e85c = _0x48e85c - 0x0;
  var _0x23fc5a = _0xe936[_0x48e85c];
  return _0x23fc5a;
};
let obj = {};
obj[_0x23fc('0x0', '')] = function (_0x335437) {
  var _0x1aac02 = 0x30d3f;
  for (var _0x3bed6a = 0x30d3f; _0x3bed6a > 0x0; _0x3bed6a--) {
    var _0x375340 = 0x0;
    for (var _0x1ddb77 = 0x0; _0x1ddb77 < _0x3bed6a; _0x1ddb77++) {
      _0x375340 += _0x335437['a'][0x0];
    }
    _0x375340 % _0x335437['a'][0x2] == _0x335437['a'][0x1] && _0x3bed6a < _0x1aac02 && (_0x1aac02 = _0x3bed6a);
  }
  return _0x1aac02;
};

const fun03 = (pull) => {
  let i = 0;
  while ((pull.a[2] * i + pull.a[1]) % pull.a[0]) {
    i++;
  }
  return (pull.a[2] * i + pull.a[1]) / pull.a[0];
};

const tree = async (idx) => {
  // console.log(idx);
  const pull = await request('http://159.75.70.9:8081/pull?u=000004326FC8751A327D8934BD5FA094');
  // pull.a.sort((a, b) => a - b);
  // const val = await fun04(pull);
  const val = fun05(pull);
  console.log(pull, idx, val);
  // console.log(pull.a, pull.a[0]);
  // const a = pull.a;
  // // const push = await (await fetch(`${cgi}/push?t=${pull.t}&a=${val}`)).json();
  const push = await request(`http://159.75.70.9:8081/push?t=${pull.t}&a=${val}`);
  console.log(push);
};
let i = 0;
let timer1 = setInterval(() => {
  tree(i);
  ++i;
}, 100);

// setTimeout(() => {
//   clearInterval(timer1);
//   i = 0;
// }, 100000);
// new Array(100).fill(0).forEach((_, index) => {
//   tree(index);
// });

// tree(1);
// console.log(fun04)
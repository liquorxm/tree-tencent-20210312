// var _0xe936 = ['A5473788'];
// (function (_0x48e85c, _0xe936d8) {
//   var _0x23fc5a = function (_0x2858d9) {
//     while (--_0x2858d9) {
//       _0x48e85c['push'](_0x48e85c['shift']());
//     }
//   };
//   _0x23fc5a(++_0xe936d8);
// })(_0xe936, 0x196);
// var _0x23fc = function (_0x48e85c, _0xe936d8) {
//   _0x48e85c = _0x48e85c - 0x0;
//   var _0x23fc5a = _0xe936[_0x48e85c];
//   return _0x23fc5a;
// };
// let obj = {};
// obj[_0x23fc('0x0')] = function (_0x335437) {
//   var _0x1aac02 = 0x30d3f;
//   for (var _0x3bed6a = 0x30d3f; _0x3bed6a > 0x0; _0x3bed6a--) {
//     var _0x375340 = 0x0;
//     for (var _0x1ddb77 = 0x0; _0x1ddb77 < _0x3bed6a; _0x1ddb77++) {
//       _0x375340 += _0x335437['a'][0x0];
//     }
//     _0x375340 % _0x335437['a'][0x2] == _0x335437['a'][0x1] && _0x3bed6a < _0x1aac02 && (_0x1aac02 = _0x3bed6a);
//   }
//   return _0x1aac02;
// };

const resFun = (arg) => {
  let a = 199999;
  for (let i = 199999; i > 0; i--) {
    let b = 0;
    for (let j = 0; j < i; j++) {
      b += arg.a[0];
    }
    b % arg.a[2] === arg.a[1] && i < a && (a = i);
  }

  return a;
};

const res1 = () => {
  let i = 0;
  while ((120560 * i + 179) % 707) {
    i++;
  }
  console.log(i, (120560 * i + 179) / 707);
};

const fun03 = (pull) => {
  let i = 0;
  while ((pull.a[2] * i + pull.a[1]) % pull.a[0]) {
    i++;
  }
  return (pull.a[2] * i + pull.a[1]) / pull.a[0];
};

res1();

// console.log(
//   resFun({
//     c: 'A5473788',
//     a: [707, 179, 120560],
//     t: '0000043200100093B1A790EE51DCFE6D',
//   })
// );

// window.A5473788

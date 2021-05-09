const window = require('window');

let obj = {};

// 先将a从小到大排序  pull.a.sort((a, b) => a - b);
const fun04 = async (_) =>
  (($, _, f2, f3, f4) => {
    let f5 = (function* () {
      while ([])
        // yield ((_, f2) => _ - f2)['bind'](
        //   +[],
        //   f3,
        //   f4
        // );
        yield [
          (_, f2) => _ + f2,
          (_, f2) => _ - f2,
          (_, f2) => _ * f2
        ][++f2 % (3)]['bind'](
          +[],
          f3,
          f4
        );
      // yield [
      //   (_, f2) => _ + f2,
      //   (_, f2) => _ - f2,
      //   (_, f2) => _ * f2
      // ][++f2 % (3)]['bind'](
      //   +[],
      //   f3,
      //   f4
      // );
    })();
    let f6 = function (f5, f6, f7) {
      f4 = f5;
      f3 = f6['next']()['value']();
      // console.log(f3, f4, f5, f6, f7)
      f2 == _['a']['length'] && f7(-f3);
    };
    // return new Promise((f2) => _['a']['forEach']((f3) => $['setTimeout']((f4) => f6(f3, f5, f2), f3)));
    return new Promise((f2) => _['a']['forEach']((f3) => setTimeout((f4) => f6(f3, f5, f2), 0)));
  })(window, _, 0, 0, 0);

exports.fun04 = fun04;
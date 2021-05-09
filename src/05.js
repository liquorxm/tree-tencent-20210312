// window.A661E542 = async function ({
//     a: A
// }) {
//     return (await WebAssembly.instantiate(await WebAssembly.compile(await (await fetch("data:application/octet-binary;base64,AGFzbQEAAAABBwFgAn9/AX8CFwIETWF0aANtaW4AAARNYXRoA21heAAAAwIBAAcHAQNSdW4AAgpgAV4BBn8gACECIAFBAWsiBARAA0AgAiEDQQAhBkEKIQcDQCADQQpwIQUgA0EKbiEDIAUgBhABIQYgBSAHEAAhByADQQBLDQALIAIgBiAHbGohAiAEQQFrIgQNAAsLIAIL")).arrayBuffer()), {
//         Math: Math
//     })).exports.Run(...A)
// }

const fetchUrl = require('fetch').fetchUrl;
const fun04 = require('./04').fun04;

// fetchUrl('http://159.75.70.9:8081/pull?u=000004326FC8751A327D8934BD5FA094', (error, meta, pull) => {
//   console.log(body.toString());
// });

const request = (url) => {
    return new Promise((resolve) => {
        // resolve(url);
        fetchUrl(url, (error, meta, body) => {
            // console.log(object)
            resolve(JSON.parse(body.toString()));
        });
    });
};

// console.log(fun05)

const fun = async function ({
    a: A
}) {
    // return (await WebAssembly.instantiate(await WebAssembly.compile(await (await fetch("data:application/octet-binary;base64,AGFzbQEAAAABBwFgAn9/AX8CFwIETWF0aANtaW4AAARNYXRoA21heAAAAwIBAAcHAQNSdW4AAgpgAV4BBn8gACECIAFBAWsiBARAA0AgAiEDQQAhBkEKIQcDQCADQQpwIQUgA0EKbiEDIAUgBhABIQYgBSAHEAAhByADQQBLDQALIAIgBiAHbGohAiAEQQFrIgQNAAsLIAIL")).arrayBuffer()), {
    //     Math: Math
    // })).exports.Run(...A)
    const res = (await WebAssembly.instantiate(await WebAssembly.compile(await (await fetch("data:application/octet-binary;base64,AGFzbQEAAAABBwFgAn9/AX8CFwIETWF0aANtaW4AAARNYXRoA21heAAAAwIBAAcHAQNSdW4AAgpgAV4BBn8gACECIAFBAWsiBARAA0AgAiEDQQAhBkEKIQcDQCADQQpwIQUgA0EKbiEDIAUgBhABIQYgBSAHEAAhByADQQBLDQALIAIgBiAHbGohAiAEQQFrIgQNAAsLIAIL")).arrayBuffer()), {
        Math: Math
    })).exports;
    console.log(res)
    return res.Run(...A);
}
// fun({
//     a: [1, 2]
// })


const fun05 = ({
    a: [$var0, $var1]
}) => {
    let $var2 = $var0;
    $var1 - 1;
    let $var4 = $var1 - 1;
    while ($var4) {
        // console.log('$var2', $var2)
        let $var3 = $var2;
        let $var6 = 0;
        let $var7 = 10;
        // console.log('$var2', $var2, $var3)
        while ($var3) {
            // console.log('$var3', $var3)
            let $var5 = $var3 % 10;
            $var3 = parseInt($var3 / 10);
            $var6 = Math.max($var5, $var6);
            $var7 = Math.min($var5, $var7);
            // console.log($var6, $var7)
        }
        // console.log($var6, $var7, $var6 * $var7)
        if ($var6 * $var7 === 0) {
            break;
        }
        $var2 += $var6 * $var7;
        $var4--;
    }
    return $var2;
}

exports.fun05 = fun05;

// console.log(run1(185218121, 6145762))
// 185218170
// console.log(run1(475299494, 5517305))
// 475299530
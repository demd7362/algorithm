function pow(x, n) {
    return n === 1 ? x : x * pow(x, n - 1);
}

function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}

// 등차수열 (n * (n + 1) / 2) 사용으로 대체
function sumTo(n) {
    return n === 1 ? 1 : n + sumTo(n - 1);
}

// DP 사용으로 대체
function fibo(n) {
    return n < 3 ? 1 : fibo(n - 2) + fibo(n - 1);
}

function permutation(arr) {
    if (arr.length === 0) return [[]]; // 기저 조건 => []이 아닌 [[]]
    const results = [];
    const [first, ...rest] = arr;
    const perms = permutation(rest);
    for (const perm of perms) {
        for (let i = 0; i < perm.length + 1; i++) {
            const prefixArray = perm.slice(0, i);
            const suffixArray = perm.slice(i);
            const result = [...prefixArray, first, ...suffixArray];
            results.push(result);
        }
    }
    return results;
}

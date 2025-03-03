/**
 * 数値を生成するジェネレーター関数
 * functionに続く「*」によってジェネレーター関数であることを示す。
 * ジェネレーター関数を呼び出した時点では、まだ関数の実行が開始されない。その代わりにイテレーターオブジェクトが返される。
 * 最初に next() メソッドを呼び出すと、ジェネレーター関数のyield文に到達するまで実行される。
 * そして next() メソッドからは { value: any, done: boolean } というオブジェクトが返される。
 * value には yield で返された値が格納され、done にはジェネレーター関数が完了したかどうかが格納される。
 * 
 * この後、next() メソッドが呼び出されるたびに、ジェネレーター関数は再開され、次の yield 文まで実行される。
 * ジェネレーター関数が完了すると、done は true になる。
 * @returns {Generator<number, void, unknown>} 数値を順に返すジェネレーター
 */
function* numberGenerator() {
    // 初期値を設定
    let i = 0;
    while (true) {
        // 現在の数値を yield し、次の数値を生成
        yield i++;
    }
}

// ジェネレーターを初期化
const gen = numberGenerator();

// ジェネレーターから値を取得
console.log(gen.next().value); // 0
console.log("1回目のnext()メソッド実行後");
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log("3回目のnext()メソッド実行後");
console.log(gen.next().value); // 4
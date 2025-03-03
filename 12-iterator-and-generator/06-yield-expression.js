/**
 * ジェネレーター関数を定義
 * この関数は、`yield` キーワードを使用して一時停止および再開が可能な関数です。
 * @returns {Generator} - ジェネレーターオブジェクトを返します。
 */
function* generatorFunction() {
    console.log('1回目の yield 開始');
    /** 1回目の yield 呼び出し時に、右辺の 'First value' を返して、1回目の yield 処理が止まる */
    /** 2回目の yield 呼び出し時に、引数で受け取った値が左辺の value1 に代入され、2回目の yield 処理が再開 */
    const value1 = yield '1回目の yield はここで停止します。';
    console.log('2回目の yield 開始');
    console.log('2回目の yield から受け取った引数:', value1);   // A
    
    /** 2回目の yield 呼び出し時に、右辺の 'Second value' を返して、2回目の yield 処理が止まる */
    /** 3回目の yield 呼び出し時に、引数で受け取った値が左辺の value2 に代入され、3回目の yield 処理が再開 */
    const value2 = yield '2回目の yield はここで停止します。';
    console.log('3回目の yield から受け取った引数:', value2);   // B

    return 'generatorFunction は完了しました。'; // ジェネレーター関数の完了
}

/** ジェネレーター関数のインスタンス */
const gen = generatorFunction();

console.log(gen.next()); // { value: '1回目の yield はここで停止します。', done: false }
console.log(gen.next('A')); // { value: '2回目の yield はここで停止します。', done: false }
console.log(gen.next('B')); // { value: 'generatorFunction は完了しました。', done: true }

/**
 * ジェネレーター関数の説明
 * 
 * このジェネレーター関数は、`yield` キーワードを使用して一時停止および再開が可能です。
 * 最初の `yield` 式は 'First value' を返し、次に `gen.next('First argument')` が呼び出されると、
 * `value1` に 'First argument' が代入されます。
 * 同様に、二番目の `yield` 式は 'Second value' を返し、次に `gen.next('Second argument')` が呼び出されると、
 * `value2` に 'Second argument' が代入されます。
 * 最後に、ジェネレーター関数は 'Done' を返して完了します。
 */
/**
 * 即決するプロミス
 * Promise.resolve メソッドを使用して、即座に解決されるプロミスを作成します。
 * このプロミスは "Hello, World!" というメッセージを返します。
 */
Promise.resolve('Hello, World!')
    .then((message) => {
        console.log(message); // "Hello, World!" を出力
    })
    .catch((error) => {
        console.error(error); // エラーが発生した場合にエラーメッセージを出力
    });

/**
 * 何かしらの非同期処理を行う関数
 * @returns {Promise<string>} - 非同期処理が完了したら "何かしらの非同期処理が完了した" というメッセージを返す
 */
const asyncTask = () => { return Promise.resolve('何かしらの非同期処理が完了した') };

// 非同期処理が完了または失敗したら、それぞれコンソールにメッセージを出力する
asyncTask()
    // 非同期処理が完了
    .then((message) => { console.log(message); })
    // 非同期処理が失敗
    .catch((error) => { console.error(error); });
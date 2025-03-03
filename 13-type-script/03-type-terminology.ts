/**
 * User 型は、ユーザー情報を表現するためのデータ構造を定義します。
 * 型エイリアスを使用してシンプルな構造を持つモデルを作成する際に便利です。
 * 
 * 型エイリアスは再利用性が高く、コードの可読性を向上させます。
 * 例えば、ユーザー情報を表す場合に、以下のようなフィールドを定義します:
 * - id: ユーザーの識別子
 * - name: ユーザーの名前
 * - email: ユーザーのメールアドレス
 * - createdAt: ユーザーの作成日時
 * 
 * 型エイリアスを使用することで、コードが簡潔になり、他の部分でもこの型を再利用することができます。
 * また、型名を付けることで、その型が何を表しているのかを明確に示すことができます。
 * 
 * 
 * 型エイリアスはシンプルなデータ構造を表現するのに適しており、特にメソッドを持つ必要がない場合や、クラスよりもシンプルに型を定義したい場合に有効です。
 * 
 * クラスを使う場合は、インスタンス化やメソッドが必要な場合に適していますが、データ構造だけを表現する場合は型エイリアスを推奨します。
 */

/**
 * ユーザー情報を表す User 型
 * @typedef {Object} User
 * @property {number} id - ユーザーの識別子
 * @property {string} name - ユーザーの名前
 * @property {string} email - ユーザーのメールアドレス
 * @property {Date} createdAt - ユーザーの作成日時
 */
type User = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};

/**
 * ユーザー情報を操作する関数
 * @param {User} user - ユーザー情報
 */
const createUser = (user: User) => {
    console.log(`User created: ${JSON.stringify(user)}`); 
};

/** 新しいユーザー情報 */
const newUser: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    createdAt: new Date()
};

createUser(newUser);    // User created: {"id":1,"name":"Alice","email":"alice@example.com","createdAt":"2025-02-27T08:03:52.206Z"}

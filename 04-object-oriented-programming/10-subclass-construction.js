/**
 * Animal クラスは動物を表します。
 * @param {string} name - 動物の名前。
 */
class Animal {
    constructor(name) {
        /** 動物の名前 */
        this.name = name;
    }
}

// 普通に継承する場合
{
    /**
     * Cat クラスは猫を表し、Animal クラスを継承します。
     * @param {string} name - 猫の名前。
     * @param {string} breed - 猫の品種。
     */
    class Cat extends Animal {
        constructor(name, breed) {
            // まず親クラスのコンストラクタを呼び出す必要がある
            super(name);
            // その後で、this が使えるようになる（super() を呼び出さないと this を使うことはできない）
            /** 猫の品種 */
            this.breed = breed;
        }
    }

    /** 猫のインスタンス */
    const myCat = new Cat('Whiskers', 'Siamese');
    console.log(myCat.name); // 出力: Whiskers
    console.log(myCat.breed); // 出力: Siamese
}

// コンストラクタなしでクラスを継承する場合、サブクラスのコンストラクタは自動的に親クラスのコンストラクタを呼び出します。
{
    /**
     * Dog クラスは犬を表し、Animal クラスを継承します。
     */
    class Dog extends Animal { }

    /** 犬のインスタンス */
    const myDog = new Dog('Buddy');
    console.log(myDog.name); // 出力: Buddy
}

/**
 * サブクラスのコンストラクタ
 * 
 * 必ず親クラスのコンストラクタを呼び出す必要があります。
 * これは、サブクラスが親クラスのプロパティを継承するためです。
 * 
 * 以下の例では、`Cat` クラスが `Animal` クラスを継承しています。
 * `Cat` クラスのコンストラクタは、`super()` を使って `Animal` クラスのコンストラクタを呼び出しています。
 */
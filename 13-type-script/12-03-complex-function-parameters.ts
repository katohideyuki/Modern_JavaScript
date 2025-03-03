/** 人を表す型 */
type Person = {
    name: string
};

/**
 * Person のサブタイプ
 */
type Employee = Person & {};

/** Person を引数に取る関数の型 */
type PersonConsumer = (arg1: Person) => void;

/** Employee を引数に取る関数の型 */
type EmployeeConsumer = (arg2: Employee) => void;

/**
 * Person を引数に取る関数
 * @param {Person} p - 人
 */
const pc: PersonConsumer = (p: Person) => {
    console.log(`a person named ${p.name}`);
};

/** EmployeeConsumer 型の変数には、PersonConsumer 型の値を受け入れることができる */
const ec: EmployeeConsumer = pc;

pc({ name: 'Yamada' });   // a person named Yamada
ec({ name: 'Tanaka' });   // a person named Tanaka

/** Employee を生成する関数の型 */
type EmployeeProducer = (arg1: string) => Employee;

/** Person を生成する関数の型 */
type PersonProducer = (arg1: string) => Person;

/**
 * Employee を生成する関数
 * @param {string} name - 名前
 * @returns {Employee} Employee オブジェクト
 */
const ep: EmployeeProducer = (name: string) => {
    return { name };
};

/** PersonProducer 型の変数には、EmployeeProducer 型の値を受け入れることができる */
const pp: PersonProducer = ep;

console.log(ep('Sasaki'));      // { name: 'Sasaki' }
console.log(pp('Hashimoto'));   // { name: 'Hashimoto' }
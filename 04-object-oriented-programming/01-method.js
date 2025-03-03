Yamada = {
    name: 'Yamada',
    salary: 90000,
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100;
    }
};
Yamada.raiseSalary(200);
console.log(Yamada.salary);
/**
 * メソッド宣言にはショートカット構文がある
 */
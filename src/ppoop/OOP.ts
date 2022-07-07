class OOP {

    public static main(): void {

        let customer: Customer = new Customer(1000);
        let vm: VendingMachine = new VendingMachine(10, 3);

        let want_juice: string = "Orange juice";

        let pay: number = vm.buy(want_juice, customer.getChanges());

        if(pay === 0) {
            customer.resetting_juice(pay, null);
        } else {
            customer.resetting_juice(pay, want_juice);
        }

        console.log(customer.toString());

    }

}

class Customer {

    private changes: number;
    private hasJuice: String | null = null;

    constructor(changes: number) {
        this.changes = changes;
    }

    public getChanges(): number {
        return this.changes;
    }

    public setJuice(hasJuice: string): void {
        this.hasJuice = hasJuice;
    }

    public resetting_juice(changes: number, hasJuice: string|null): void {
        this.changes = changes;
        this.hasJuice = hasJuice;
    }

    public toString(): string {
        return `잔액: ${this.changes} \n주스: ${this.hasJuice}`;
    }
}

class VendingMachine {

    private Orange_juice: number;
    private Apple_juice: number;

    constructor(Orange_juice: number, Apple_juice: number) {
        this.Orange_juice = Orange_juice;
        this.Apple_juice = Apple_juice;
    }

    private orangeAvailable(pay: number): boolean {

        if(this.Orange_juice > 0) {
            if(pay >= 500) {
                return true;
            }
        }

        return false;

    }

    private appleAvailable(pay: number): boolean {

        if(this.Apple_juice > 0) {
            if(pay >= 300) {
                return true;
            }
        }

        return false;

    }

    public buy(kind: string, pay: number): number {

        if(kind === "Orange juice") {
            if(this.orangeAvailable(pay)) {
                this.Orange_juice --;
                console.log("오렌지 주스입니다.")

                return 500;
            }
            console.log("오렌지 주스가 없습니다.");
            return 0;
        } else if(kind === "Apple juice") {
            if(this.appleAvailable(pay)) {
                this.Apple_juice --;
                console.log("사과 주스입니다.");

                return 300;
            }
            console.log("사과 주스가 없습니다.");
            return 0;
        }

        console.log("다른 주스를 골라주세요.");
        return 0;
    }

}

OOP.main();
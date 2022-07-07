class PP {

    static Orange_juice: number = 10;
    static Apple_juice: number = 20;

    public static main(): void {

        let customer_changes: number = 1000;        
        let customer_has: string | null = null;

        let want_juice: string = "Pineapple juice";

        if(want_juice === "Orange juice") {
            if(PP.orangeAvailable(customer_changes)) {

                let changes: number = PP.getOrangeJuice();
                console.log("오렌지 주스입니다.");
                
                customer_has = want_juice;
                customer_changes -= changes;

            } else {

                console.log("오렌지 주스가 없습니다.");

            }
        } else if(want_juice === "Apple juice") {
            if(PP.appleAvailable(customer_changes)) {

                let changes: number = PP.getAppleJuice();
                console.log("사과 주스입니다.");

                customer_has = want_juice;
                customer_changes -= changes;

            } else {

                console.log("사과 주스가 없습니다.");

            }
        } else {

            console.log("다른 주스를 골라주세요.");

        }

        console.log(`잔액: ${customer_changes} \n주스: ${customer_has}`);

    }

    public static orangeAvailable(pay: number): boolean {

        if(PP.Orange_juice > 0) {
            if(pay >= 500) {
                return true;
            }
        }

        return false;
    }

    public static getOrangeJuice(): number {
        PP.Orange_juice --;

        return 500;
    }

    public static appleAvailable(pay: number): boolean {

        if(PP.Apple_juice > 0) {
            if(pay >= 300) {
                return true;
            }
        }

        return false;
    }

    public static getAppleJuice(): number {
        PP.Apple_juice --;

        return 300;
    }
}

PP.main();
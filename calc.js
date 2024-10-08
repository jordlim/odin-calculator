function calc() {
    // Current display
    let display = document.querySelector("#amount");

    const buttons = document.querySelectorAll("button");

    let op1 = "";
    let op2 = "";
    let eval = "";

    let last = "";
    nums=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
        
            let id = btn.id;
            let text = btn.textContent;
            
            // On any button press, change to C if AC
            let c = document.getElementById("clear");
            if (c.textContent == "AC") {
                c.textContent = "C";
            }

            // +, -, *, /
            if (id == "add" || id == "subtract" || id == "multiply" || id == "divide") {
                if (op2 != "" && nums.includes(last)) {
                    let val = operate(eval, op1, op2);
                    display.textContent = val;
                    op1 = val;
                }
                op2 = "";
                eval = id;
            }

            // =
            else if (id == "equals" && op2 != "") {
                let val = operate(eval, op1, op2);
                display.textContent = val;
                op1 = val;
            }

            // %
            else if (id == "percent") {
                let val = operate("divide", op1, 100);
                display.textContent = val;
                op1 = val;
            }

            // 0-9
            else if (nums.includes(id)){
                
            
                // Initial clear, and prevent duplicate zero workaround
                if (op1 == "" || op1 == "0") {
                    op1 = "";
                    display.textContent = "";
                }
                if (op2 == "" || op2 == "0") {
                    op2 = "";
                    display.textContent = "";
                }


                // OPTIONAL TODO: fix bug where clicking a number after equals doesn't reset display and operator
                // NOTE: Ensure it doesn't remove repeat operation when clicking equal sign


                // TODO: Fix bug allowing zeros with no numbers


                if (eval == "") {
                    display.textContent = display.textContent + text;
                    op1 = op1.concat('', text.replace(/\s/g, ""));
                }
                else if (eval != "" && op2 == "") {
                    display.textContent = "";
                    display.textContent = display.textContent + text;
                    op2 = op2.concat('', text.replace(/\s/g, ""));
                }
                else if (eval != "" && op2 != "") {
                    display.textContent = display.textContent + text;
                    op2 = op2.concat('', text.replace(/\s/g, ""));
                }
            }

            else if (id == "dot") {
                if ((display.textContent).includes('.') == false) {
                    if (eval == "") {
                        display.textContent = display.textContent + text;
                        op1 = op1.concat('', text.replace(/\s/g, ""));
                    }
                    else if (eval != "" && op2 == "") {
                        display.textContent = "";
                        display.textContent = display.textContent + text;
                        op2 = op2.concat('', text.replace(/\s/g, ""));
                    }
                    else if (eval != "" && op2 != "") {
                        display.textContent = display.textContent + text;
                        op2 = op2.concat('', text.replace(/\s/g, ""));
                    }

                }
            }

            // +/-
            else if (id == "sign" && display.textContent != "0") {
                let val = operate("multiply", op1, -1);
                display.textContent = val;
                op1 = val;
            }

            // C
            else if (id == "clear") {
                display.textContent = "0";
                btn.textContent = "AC";
                op1 = "";
                op2 = "";
                eval = "";
            }

            // Adjust last button press at end to prevent operator glitches
            last = id;
        });
    });

}


function operate(operator, op1, op2) {
    op1 = parseFloat(op1);
    op2 = parseFloat(op2);
    console.log(op1, op2, operator);
    switch(operator) {
        case "add":
            return op1 + op2;
        case "subtract":
            return op1 - op2;
        case "multiply":

            return parseFloat( (op1 * op2).toFixed(3) );
        case "divide":
            if (op2 == 0) {
                return "Error";
            }
            return parseFloat( (op1 / op2).toFixed(3) );
    }
}

calc();
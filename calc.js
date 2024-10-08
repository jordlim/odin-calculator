function calc() {
    // Current display
    let display = document.querySelector("#amount");

    const buttons = document.querySelectorAll("button");

    // *** ADD A BACKSPACE FEATURE ***


    let op1 = "";
    let op2 = "";
    let eval = "";

    let last = "";
    nums=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
        
            let id = btn.id;
            let text = btn.textContent;
            

            // On any button, change to C if AC
            let c = document.getElementById("clear");
            if (c.textContent == "AC") {
                c.textContent = "C";
            }

            // +, -, *, /
            if (id == "add" || id == "subtract" || id == "multiply" || id == "divide") {
                if (op2 != "" && last != "equals") {
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
                // TODO: Divide by 100
                // Need to differentiate between op1 and op2
            }

            // 1-9
            else if (nums.includes(id)){
                if (op1 == "") {
                    display.textContent = "";
                }

                // OPTIONAL TODO: fix bug where clicking a number after equals doesn't reset display and operator
                // NOTE: Ensure it doesn't remove repeat operation when clicking equal sign
                // if (last == "equals") {
                //     display.textContent = "";
                //     op2 = "";
                //     eval = "";
                // }

                // TODO: Fix bug allowing zeros with no numbers
                
                // 0-9
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
                console.log("z");
                if ((display.textContent).includes('.') == false) {
                    console.log("a");
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
            else if (id == "sign") {
                // TODO: Multiply by -1 and update display + op
                // Need to differentiate between op1 and op2
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

            return (op1 * op2).toFixed(3);
        case "divide":
            // TODO: Prevent division by 0 by returning "Error"
            return (op1 / op2).toFixed(3);
    }
}

calc();
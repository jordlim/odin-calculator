function calc() {
    // Current display
    let display = document.querySelector("#amount");

    const buttons = document.querySelectorAll("button");

    // *** ADD A BACKSPACE FEATURE ***


    let op1 = "";
    let op2 = "";
    let eval = "";

    let last = "";

    // Track if first evaluation is done
    let done = false;

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
        
            let id = btn.id;
            let text = btn.textContent;
            

            // On any button, change to C if AC
            let c = document.getElementById("clear");
            if (c.textContent == "AC") {
                c.textContent = "C";
            }

            // +, -, *, / (execute, clear stack, invert color)
            if (id == "add" || id == "subtract" || id == "multiply" || id == "divide") {
                if (op2 != "" && last != "equals") {
                    let val = operate(eval, op1, op2);
                    display.textContent = val;
                    op1 = val;
                }
                op2 = "";
                eval = id;
            }

            // = (execute last op and number, change new op1 to new val)
            if (id == "equals" && op2 != "") {
                let val = operate(eval, op1, op2);
                display.textContent = val;
                op1 = val;
            }

            // % (divide by 100)
            if (id == "percent") {

            }

            // 0
            if (id == "zero") {
                
            }

            // 1-9

            // TODO: fix bug where clicking a number after equals doesn't reset display and operator
            nums=["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
            if (nums.includes(id)){
                if (op1 == "") {
                    display.textContent = "";
                }
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
                    
            // .
            if (id == "dot") {
                if ( (display.textContent).includes('.') == false) {
                    // Need to differentiate between op1 and op2
                }
            }
            

            // +/-
            if (id == "sign") {
                // Multiply by -1
                // Need to differentiate between op1 and op2
            }

            // C
            if (id == "clear") {
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
            return op1 * op2;
        case "divide":
            return (op1 / op2).toFixed(2);
    }
}

calc();
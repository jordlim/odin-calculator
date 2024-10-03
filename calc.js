function calc() {
    // Current display
    let display = document.querySelector("#amount");

    const buttons = document.querySelectorAll("button");

    // *** ADD A BACKSPACE FEATURE ***

    // 0 by default
    let stack = [] 

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
        
            let id = btn.id;
            let text = btn.textContent;
            // +, -, *, / (execute, clear stack, invert color)

            // = (execute last op and number)

            // % (divide by 100)

            // 0

            // 1-9
            nums=["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
            if (nums.includes(id)){
                if (stack.length == 0) {
                    display.textContent = "";
                }
                stack.push(id);
                display.textContent = display.textContent + text;
            }

            
            
                    
            // .

            // +/-

            // C (clear and change to AC)
            if (id == "clear") {
                display.textContent = "0";
                stack = [];
            }
            
        });
    });

}


function operate(operator, op1, op2) {
    switch(operator) {
        case "+":
            break;
        case "-":
            break;
        case "/":
            break;
        case "%":
            break;
    }
}

function update(val) {
    
}

calc();
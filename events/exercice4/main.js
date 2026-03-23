let inputs = document.querySelectorAll(".otp-input");

inputs.forEach(function (input, index, inputs) {
    input.addEventListener("keyup", function (event) {
        if (event.key !== "Backspace") {
            if (input.value.length === 1 && index + 1 < inputs.length) {
                inputs[index + 1].removeAttribute("disabled");
                inputs[index + 1].focus();
            }
        } else {
            if (index - 1 >= 0) {
                input.value = "";
                let disabledAttr = document.createAttribute("disabled");
                inputs[index].setAttributeNode(disabledAttr);
                inputs[index - 1].focus();
            }
        }
    })
});
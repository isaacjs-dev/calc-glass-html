const state = {
    displayValue: "0",
    clearDisplay: false,
    oparation: null,
    values: [0, 0],
    current: 0
};

function calcInit() {
    $('#display').innerText = state.displayValue;
}

function clearMemory() {
    state.displayValue = "0";
    state.clearDisplay = false;
    state.oparation = null;
    state.values = [0, 0];
    state.current = 0;
    calcInit();
}

function setOperation(op) {
    if (state.current === 0) {
        state.oparation = op;
        state.current = 1;
        state.clearDisplay = true;
    } else {
        const equals = op === "=";
        const currentOperation = state.oparation;

        state.values[0] = eval(`${state.values[0]} 
          ${currentOperation} 
          ${state.values[1]}`);

        state.values[1] = 0;

        state.displayValue = state.values[0];
        state.oparation = equals ? null : op;
        state.current = equals ? 0 : 1;
        state.clearDisplay = !equals;
    }
}

function addDigit(n) {
    if (n === "." && state.displayValue.includes(".") && !state.clearDisplay) {
        return;
    }

    const clearDisplay =
        (state.displayValue === "0" && n !== ".") || state.clearDisplay;
    const currentValue = clearDisplay
        ? n === "."
            ? "0"
            : ""
        : state.displayValue;
    const displayValue = currentValue + n;

    state.displayValue = displayValue;
    calcInit();
    state.clearDisplay = false;

    state.values[state.current] = parseFloat(state.displayValue);
}


function Button(props) {
    const button = el.Button({
        type: 'button',
        innerText: props.text,
        class: props.class ? props.class : props.op ? 'op' : false
    })

    button.addEventListener('click', () => {
        if (props.clear) {
            return clearMemory();
        } else if (props.op) {
            return setOperation(props.text);
        } else {
            return addDigit(props.text);
        }
    })

    return button;
};
require('components/Calc/style.css');

function Calc() {
    return (
        el.div({
            class: 'calc'
        }, [
            Display(),
            Button({ text: 'AC', clear: true }),
            Button({ text: '+/-' }),
            Button({ text: '<=' }),
            Button({ text: '/', op: true }),
            Button({ text: '7' }),
            Button({ text: '8' }),
            Button({ text: '9' }),
            Button({ text: '*', op: true }),
            Button({ text: '4' }),
            Button({ text: '5' }),
            Button({ text: '6' }),
            Button({ text: '-', op: true }),
            Button({ text: '1' }),
            Button({ text: '2' }),
            Button({ text: '3' }),
            Button({ text: '+', op: true }),
            Button({ text: '0', class: 'scol-2' }),
            Button({ text: '.' }),
            Button({ text: '=', op: true })
        ])
    )
};

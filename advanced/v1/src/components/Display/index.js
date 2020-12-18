function Display(text) {
    const display = el.div({class: 'display-area'}, [
        el.div({
            class: 'display',
            id: 'display'
        }),
        el.div({
            class: 'display-memory'
        })
    ])

    html.display = display
    return display;
};
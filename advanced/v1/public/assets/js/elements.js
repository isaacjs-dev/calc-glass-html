const _newElement = (element, attributes = false, children = false) => {
    const elementCreate = document.createElement(element);

    if (attributes) {
        const attributesKeys = Object.keys(attributes);

        attributesKeys.forEach(attribute => {
            switch (attribute) {
                case 'innerHTML':
                    elementCreate.innerHTML = attributes[attribute];
                    break;
                case 'innerText':
                    elementCreate.innerText = attributes[attribute];
                    break;
                default:
                    elementCreate.setAttribute(attribute, attributes[attribute]);

            }
        })
    }

    if (children) {
        const allChildren = Array.isArray(children) ? children : [children]
        allChildren.forEach(child => {
            elementCreate.appendChild(child)
        })
    }

    return elementCreate;
}

const el = {
    div: (attributes = false, children = false) => {
        return _newElement('div', attributes, children);
    },

    Button: (attributes = false, children = false) => {
        return _newElement('button', attributes, children);
    }
}
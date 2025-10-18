import React from "react";
import ReactDOM from "react-dom/client"

function customRender(reactElement, container){
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me ti visit google'
// }
// const mainContainer = document.querySelector('#root')

const anotherElement = (
    <a href="http://google.com" target="_blank">Visist Google</a>
)

const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target: '_blank'},
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).
render(
   reactElement
)
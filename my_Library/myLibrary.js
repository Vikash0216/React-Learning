const root = document.querySelector('#root')

// function injectObject(obj ,place){
//    const domElement = document.createElement(obj.type)
//    domElement.innerHTML = obj.children
//     domElement.setAttribute('href', obj.props.href)
//     domElement.setAttribute('target', obj.props.target)
    
//     place.appendChild(domElement)
// }

function injectObject(obj,place){
    const domElement = document.createElement(obj.type)
    domElement.innerHTML = obj.children
    for (const key in obj.props) {
      if(obj.props.hasOwnProperty(key)){
        domElement.setAttribute(key , obj.props[key])
      }
    }
    
    place.appendChild(domElement)
}

libraryObj = {
    type : 'a',
    props:{
        href:'https://www.cricbuzz.com/',
        target:'_blank'
    },
    children:'Click here to visit google'
}

injectObject(libraryObj,root)
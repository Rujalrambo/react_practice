import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {

  return (
    <>
    <h1>Custom app | </h1>
    </>
  )
}


// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "CLick to visit google",
// };

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>

)
const anotherUser = 'this is light'
const reactElement = React.createElement(
  'a',
  {href: 'https://gooogle.com', target: '_blank'},
  'click the google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)

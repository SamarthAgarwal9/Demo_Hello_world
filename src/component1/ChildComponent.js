import React from 'react'

function ChildComponent(props) {
  return (
    // <div>
    //    <button onClick={props.greetHandler
    //    }>GreekParent</button>

    // </div>
    <div>
       <button onClick={()=> props.greetHandler('child !')
       }>GreekParent</button>
    </div>

    )
}

export default ChildComponent

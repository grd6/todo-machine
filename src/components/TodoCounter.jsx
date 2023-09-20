import React from 'react'

const TodoCounter = ({total,completed}) => {
  return (

    <>{completed === total?<h3>Has completado todas las TODOs 👀👀🥳</h3>
    : <h3>Has completado{completed} de {total} TODOs</h3>}
    </>
    

  )
}

export default TodoCounter
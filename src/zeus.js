
import React from 'react';
import './index.css';
const Zeus = ({temp ,delete_entry}) =>{
    
    const todolist = temp.length ? (
      temp.map(temp1 => {
          return (
              <div className="collection-item" key={temp1.id}>
                  <span className="icons" onClick={() => {delete_entry(temp1.id)}}> <button className="buttons">delete</button></span>
              <span className="listing" >{temp1.content}</span>

              </div>

          )
      }

      )
    ):(
        <div className="containers">
        <p className="finall"> nothing left </p>
        </div>
    )
    return(
        <div className="zeus collection">
         {todolist}
        </div>
    )

}
export default Zeus;
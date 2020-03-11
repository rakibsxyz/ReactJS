import React from 'react';

const Ninja = ({ninjas, deleteNinja}) => {

    return (
        <div className="ninja-list">
          { 
            ninjas.map(ninja => {
              return ninja.age > 20 ? (
                <div className="ninja" key={ninja.id}>
                  <div>Name: { ninja.name }</div>
                  <div>Age: { ninja.age }</div>
                  <button onClick= {() => {deleteNinja(ninja.id)}}> Delete Ninja</button>
                  
                </div>
              ) : null
            })
          }
        </div>
      );
        
    }

export default Ninja;
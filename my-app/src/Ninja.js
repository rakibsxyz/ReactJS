import React from 'react';

const Ninja = ({ninjas}) => {
        return(
            <div className="ninja-list">
                {
                    ninjas.map(ninja => {
                        return ninja.age > 20 ?(
                            <div className="ninja" key={ninja.id}>
                            <div>Name: {ninja.name} </div>  
                    </div> 
                    ) : null;
                })
            }
        </div>
        )
    }

export default Ninja;
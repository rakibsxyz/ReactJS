import React from 'react';

const Title = (props: any) => {
    console.log("Rendering Title")
    return (
        <h2>
            useCallback hook
        </h2>
    );
};

// export default Title;
export default React.memo(Title);
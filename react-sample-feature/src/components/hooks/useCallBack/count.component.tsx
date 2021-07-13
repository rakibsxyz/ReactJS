import React from 'react';

const Count = (props: any) => {
    const {text, count} = props;
    console.log(`Rengering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    );
};

// export default Count;
export default React.memo(Count);
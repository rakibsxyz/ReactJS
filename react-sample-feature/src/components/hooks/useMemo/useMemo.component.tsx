import React from 'react';

const UseMemoComponent = (props: any) => {
    const[counterOne, setCounterOne] = React.useState<number>(0);
    const[counterTwo, setCounterTwo] = React.useState<number>(0); 

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    // const isEven = () => {
    //     let i = 0
    //     while (i < 2000000000) i++
    //     return counterOne % 2 === 0
    // }

    const isEven = React.useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne]);

    return (
        <div className='app'>
            <div className='mt-5 mb-3'>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    );
};

export default UseMemoComponent;
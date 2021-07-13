import React from 'react';
import Button from './button.component';
import Count from './count.component';
import Title from './title.component';

const UseCallbackComponent = (props: any) => {
    const[age, setAge] = React.useState<number>(25);
    const[salary, setSalary] = React.useState<number>(20000); 

    const incrementAge = React.useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = React.useCallback(() => {
        setSalary(salary + 1000);
    }, [salary])

    // const incrementAge = React.useCallback(() => {
    //     setAge(age + 1)
    // }, [age])

    // const incrementSalary = React.useCallback(() => {
    //     setSalary(salary + 1000);
    // }, [salary])

    return (
        <div className ='app'>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
};

export default UseCallbackComponent;
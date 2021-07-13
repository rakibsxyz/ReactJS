import React from 'react';
import DropdownComponent from './dropdown-component';
import Table from './table.component';

const firstDropdown = [
    {
        text: "One",
        value: 1
    },
    {
        text: "Two",
        value: 2
    },
    {
        text: "Three",
        value: 3
    }
]

const secondDropdown = [
    {
        text: "Four",
        value: 4
    },
    {
        text: "Five",
        value: 5
    },
    {
        text: "Siz",
        value: 6
    }
]

const TableData = [
    {
        name: "Masum",
        email: "masum@mail.com",
        phone: 123456789
    },
    {
        name: "Rahib",
        email: "rahib@mail.com",
        phone: 123456789
    },
    {
        name: "Hasan",
        email: "hasan@mail.com",
        phone: 123456789
    }
]

const CascadingDropdown = (props: any) => {
    const [first, setFirst] = React.useState<any>();
    const [second, setSecond] = React.useState<any>();
    const [table, setTable] = React.useState<any>();

    const onChangeFirstDropdown = (event: any) => {
        if(parseInt(event.target.value) > 0) {
            setSecond(secondDropdown);
        } else {
            setSecond(undefined);
            setTable(undefined);
        }
    }

    const onChangeSecondDropdown = (event: any) => {
        if(parseInt(event.target.value) > 0) {
            setTable(TableData);
        } else {
            setTable(undefined);
        }
    }

    React.useEffect(() => {
        setFirst(firstDropdown);
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h4 className='mb-3 mt-4'>Cascading Dropdown</h4>

                    {first ? <DropdownComponent cssClass={"mb-3"} items={first} onDropdounChange={onChangeFirstDropdown}/> : null}
                    {second ? <DropdownComponent cssClass={"mb-3"} items={second} onDropdounChange={onChangeSecondDropdown}/> : null}
                    {table ? <Table items={table} /> : null}
                </div>
            </div>
            
        </div>
    );
};

export default CascadingDropdown;
import React from 'react';

// material-ui
import MUIDataTable from 'mui-datatables';
// Original module with no default theme

import makeStyles from '@material-ui/styles/makeStyles';

const myStyles = {
    padding: 8,
    border: '1px solid black'
};

const useStyles = makeStyles(() => ({
    test: myStyles
}));

export default function UserPage() {
    const classes = useStyles();
    const columns = [
        {
            name: 'Name',
            options: {
                setCellProps: (_, index) => (index % 2 === 0 ? { style: myStyles } : { className: classes.test })
            }
        }
    ];

    const options = {
        filter: true,
        filterType: 'dropdown'
    };

    const data = [
        ['Gabby Georgee', 'Business Analyst', 'Minneapolis'],
        ['Aiden Lloyd', "Business Consultant for an International Company and CEO of Tony's Burger Palace", 'Dallas'],
        ['Jaden Collins', 'Attorney', 'Santa Ana'],
        ['Franky Rees', 'Business Analyst', 'St. Petersburg'],
        ['Aaren Rose', null, 'Toledo'],
        ['Johnny Jones', 'Business Analyst', 'St. Petersburg'],
        ['Jimmy Johns', 'Business Analyst', 'Baltimore'],
        ['Jack Jackson', 'Business Analyst', 'El Paso'],
        ['Joe Jones', 'Computer Programmer', 'El Paso'],
        ['Jacky Jackson', 'Business Consultant', 'Baltimore'],
        ['Jo Jo', 'Software Developer', 'Washington DC'],
        ['Donna Marie', 'Business Manager', 'Annapolis']
    ];
    return <MUIDataTable title="Employee List" data={data} columns={columns} options={options} />;
}

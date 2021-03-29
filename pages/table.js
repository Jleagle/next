import DataTable from 'react-data-table-component';
import {Component} from "react";

const data = [
    {
        id: 1,
        title: 'Conan the Barbarian',
        year: '1982'
    },
    {
        id: 2,
        title: 'Conan the Barbarian 2',
        year: '1983'
    }
];

const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
    },
];

class MyComponent extends Component {
    render() {
        return (
            <DataTable
                title="Arnold Movies"
                columns={columns}
                data={data}
                sortServer={true}
            />
        )
    }
}

export default MyComponent

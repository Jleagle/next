import React, {useState, useEffect, useMemo} from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Link from 'next/link'

const AdvancedPaginationTable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchUsers = async (page, size = perPage) => {

        setLoading(true);

        const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${size}&delay=1`);

        setData(response.data.data);
        setTotalRows(response.data.total);

        setLoading(false);
    };

    useEffect(() => {
        fetchUsers(1);
    }, []);

    const columns = useMemo(
        () => [
            {
                name: "First Name",
                selector: "first_name",
                sortable: true
            },
            {
                name: "Last Name",
                selector: "last_name",
                sortable: true
            },
            {
                name: "Email",
                selector: "email",
                sortable: true
            },
            {
                // eslint-disable-next-line react/button-has-type
                cell: row => <Link href="/about">Link</Link>
            }
        ],
        []
    );

    const handlePageChange = page => {
        fetchUsers(page);
        setCurrentPage(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        fetchUsers(page, newPerPage);
        setPerPage(newPerPage);
    };

    return (
        <DataTable
            title="Users"
            columns={columns}
            data={data}
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            paginationDefaultPage={currentPage}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            selectableRows
            onSelectedRowsChange={({selectedRows}) => console.log(selectedRows)}
        />
    );
};

function Table() {
    return (
        <div className="App">
            <AdvancedPaginationTable/>
        </div>
    );
}

export default Table
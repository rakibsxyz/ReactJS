import React, {useState, useEffect} from 'react'
import ReactPaginate from "react-paginate";
import axios from 'axios'

function Pagination() {

    const [newsData, setNewsData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const [newsPerPage, setNewsPerPage] = useState<number>(16)
    const [totalNews, setTotalNews] = useState<number>(100)

    useEffect(() => {
        setLoading(true)
        fetchPaginateNews()
    }, [offset])

    const fetchPaginateNews = async () => {

        const queryApi = `http://localhost:7003/news?offset=${offset}&limit=${newsPerPage}`

        axios.get<any>(queryApi)
            .then((res) => {
                setNewsData(res.data.data)
                setTotalNews(res.data.total)
                console.log(res.data)
            })
            .catch((e) => {
                console.log("err")
            })
        setLoading(false)

    }

    const paginateReact = (data: any) => {
        const newoffset = (data.selected) * newsPerPage
        setOffset(newoffset)
    }

    // Need to add import 'bootstrap/dist/css/bootstrap.min.css'; in index.tsx

    return (
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={totalNews / newsPerPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={paginateReact}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    )
}

export default Pagination

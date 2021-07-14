import React from 'react'

function Pagination({ setPageNumber, numberOfPages, pageNumber }) {
    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

    return (
        <nav aria-label="Page navigation d-flex flex-row">
            <ul className="pagination justify-content-center">
                {pages.map(number => (
                    <li key={number} onClick={() => setPageNumber(number)} className={pageNumber === number ? "page-item active" : "page-item"} >
                        <a className="page-link">
                            {number + 1}
                        </a>
                    </li>
                ))}
            </ul>

        </nav >
    )
}

export default Pagination
import React from "react";

const pagination = ({ totalColors, ColorsPerPage, setCurrentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalColors / ColorsPerPage); i++) {
        pages.push(i);
    }

    return (
        <>
            <div className="colors-page">
                {
                    pages.map((page, index) => {
                        return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                    })
                }
            </div>
        </>
    );
}

export default pagination;
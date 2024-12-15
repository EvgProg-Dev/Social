import React from 'react';
import style from './Pagination.module.css'

export const Pagination = ({pages, currentPage, onPageChanged}) => {
    return (
        <div className={style.users__pagination}>
            {pages
                .filter(
                    (page) =>
                        page === 1 ||
                        page === pages.length ||
                        (page >= currentPage - 3 && page <= currentPage + 3)
                )
                .map((page, index, visiblePages) => (
                    <React.Fragment key={page}>
                        {index > 0 && page - visiblePages[index - 1] > 1 && (
                            <span>...</span>
                        )}
                        <button
                            onClick={() => onPageChanged(page)}
                            className={currentPage === page ? style.active : ""}
                        >
                            {page}
                        </button>
                    </React.Fragment>
                ))}
        </div>
    );
};

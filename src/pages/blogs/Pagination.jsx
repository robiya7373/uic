import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className={`px-2 py-1 mx-1 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoMdArrowDropleft className="text-[#fff] hover:text-[#00a795]" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 mx-1 border hover:border-[#00a795] text-[#fff] hover:text-[#00a795] rounded-xl ${
            currentPage === page
              ? "border-[#00a795] text-[#00a795]"
              : "border-[#00a79600] "
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`px-2 py-1 mx-1 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoMdArrowDropright className="text-[#fff] hover:text-[#00a795]" />
      </button>
    </div>
  );
};

export default Pagination;

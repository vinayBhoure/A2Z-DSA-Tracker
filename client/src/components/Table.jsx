import React from "react";
import TableRow from "./TableRow";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useUserContext } from "../context/context";

export default function Table({ data }) {
  const tableHeading = [
    "ID",
    "Problem",
    "Difficulty",
    "Status",
    "URL",
    "Date Solved",
    "Solution",
    "Notes",
    "Actions",
  ];
  
  const { problems, setProblems } = useUserContext();

  const [showModal, setShowModal] = useState(false);
  function showModalHandler() {
    setShowModal(!showModal);
  }
  return (
    <>
      <div className="shadow-md sm:rounded-lg flex flex-col gap-2">
        <div
          id="large-modal"
          tabindex="-1"
          className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto 
          md:inset-0 h-[calc(100%-1rem)] max-h-full ${showModal ? "block" : "hidden"}`}

        >
          <div className="relative w-full max-w-4xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Large modal
                </h3>
                <div onClick={showModalHandler}><RxCross2 /></div>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>

              <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="large-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-hide="large-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
        <span onClick={showModalHandler} 
        className="bg-[#2F80ED] text-center px-2 font-semibold text-white hover:ring ring-primary ring-offset-2 rounded-md active:ring-blue-500">
          + New
        </span>
        <table className="text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-slate-200 uppercase bg-[#2F80ED] ">
            <tr>
              {tableHeading.map((heading) => (
                <th scope="col" className="px-6 py-3 text-center">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {problems.map((row) => (
              <TableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

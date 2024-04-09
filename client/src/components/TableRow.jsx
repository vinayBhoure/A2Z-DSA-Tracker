import React from "react";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaNoteSticky } from "react-icons/fa6";
import { useUserContext } from "../context/context";

export default function TableRow({ row }) {
  const {
    id,
    problem_name,
    difficulty,
    status,
    question_url,
    last_updated,
    solution_url,
    description,
  } = row;

  const {removeRowHandler} = useUserContext();  

  return (
    <tr class="even:bg-[#f1f1f1] odd:bg-[#fff] border-b  hover:bg-[#CCCCCC] text-center ">
      <td class="px-4 py-2">{id}</td>
      <th
        scope="row"
        class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-left"
      >
        {problem_name}
      </th>
      <td class="px-4 py-2">{difficulty}</td>
      <td class="px-4 py-2">{status}</td>
      <td class="px-4 py-2">{question_url.substr(0, 20) + "..."}</td>
      <td class="px-4 py-2">{last_updated}</td>
      <td class="px-4 py-2">{solution_url.substr(0, 20) + "..."}</td>
      <td class="px-4 py-2 ">
        {description === "" ? <FaRegNoteSticky /> : <FaNoteSticky />}
      </td>
      <td class="flex items-center px-4 py-2">
        <a
          href="#"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
        <a
          href="#"
          class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
          onClick={() => removeRowHandler(id)}
        >
          Remove
        </a>
      </td>
    </tr>
  );
}

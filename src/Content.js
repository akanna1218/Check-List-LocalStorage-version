import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const Content = ({ Items, HandleCheck, search, HandleDelete, HandleEditButton }) => {

  if (Items.length === 0) {
    return (
      <div>
        <h2 className="contentTitle"> Things To Check </h2>
        <p style={{ textAlign: "center" }}>

          {search && Items.length === 0
            ? `No notes found :[`
            : "Please add a note..."}
        </p>{" "}
        {/** the usestate gets empty if all data is deleted , so we have to check both cases , if that searchbar's stae has value and if the main state is empty or not.  */}
      </div>
    );
  } else
    return (
      <div className="content">
        <h2 className="contentTitle">Things To Check</h2>


        < >
          {Items.map((item) => (
            <li key={item.id} className="noteList">
              <input
                className="Cbox"
                type="checkbox"
                checked={item.cpl}                                                    // checked is an html property for check boxes
                onChange={() => HandleCheck(item.id)}
                value={item.item}
              />

              <h2 className="noteContent">  {item.item} </h2>

              <button
                className="edit"
                type='text'
                onClick={() => HandleEditButton(item.id, item.item)}
              >
                <FaEdit />
              </button>

              <button
                className="delete"
                type="text"
                onClick={() => HandleDelete(item.id)}
              >
                <MdDeleteSweep />
              </button>
            </li>
          ))}
        </>
      </div>
    );
};

export default Content;

import React from "react";
function TextField(props) {
  return (
    <>
      <div class="w-full">
        <label
          for="Year"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
            {props.titleName}
        </label>
        <input
          type="text"
          name= {props.name}
          value={props.value}
          id={props.id}
          onChange={props.onChange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={props.placeholder} required=""/>
      </div>
    </>
  );
}

export default TextField;

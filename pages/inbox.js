import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
function inbox() {
  const examdata = [
    { id: "1", pd_name: "Product1" },
    { id: "2", pd_name: "Product2" },
    { id: "3", pd_name: "Product3" },
    { id: "4", pd_name: "Product4" },
    { id: "5", pd_name: "Product5" },
    { id: "6", pd_name: "Product6" },
    { id: "7", pd_name: "Product7" },
    { id: "8", pd_name: "Product8" },
    { id: "9", pd_name: "Product9" },
    { id: "10", pd_name: "Product10" },
    { id: "11", pd_name: "Product11" },
    { id: "12", pd_name: "Product12" },
    { id: "13", pd_name: "Product13" },
    { id: "14", pd_name: "Product14" },
    { id: "15", pd_name: "Product15" },
    { id: "16", pd_name: "Product16" },
    { id: "17", pd_name: "Product17" },
    { id: "18", pd_name: "Product18" },
    { id: "19", pd_name: "Product19" },
    { id: "20", pd_name: "Product20" },
    { id: "21", pd_name: "Product21" },
    { id: "22", pd_name: "Product22" },
    { id: "23", pd_name: "Product23" },
    { id: "24", pd_name: "Product24" },
    { id: "25", pd_name: "Product25" },
    { id: "26", pd_name: "Product26" },
    { id: "27", pd_name: "Product27" },
    { id: "28", pd_name: "Product28" },
    { id: "29", pd_name: "Product29" },
    { id: "30", pd_name: "Product30" },
  ];

  //usestate = varible global
  const [entity, setentity] = useState(5);
  const [pageindex, setpageindex] = useState(0);
  const [showdata, setshowdata] = useState([]);
  const [searchValue, setsearchValue] = useState("");


  useEffect(() => {
    show_data();
  }, [entity, searchValue]);



  const show_data = () => {
    //Search
    let data = examdata;
    let res = examdata;
    let check = [];
    let search = [];
    let event = searchValue.toUpperCase();
    console.log("data", data);
    check = res;
    if (data) {
      var matches = check.filter(function (x) {
        return x.pd_name?.toUpperCase().includes(event);
      });
      search = matches;
    }
    if (searchValue != "") {
      res = search;
    } else {
      res = check;
    }

    //Setpage
    let page = [];
    let index = 0;
    let six = [];
    let mod = Math.ceil(res.length / entity);
    for (let x = 0; x < mod; x++) {
      for (let i = 0; i < entity; i++) {
        if (res[index]) {
          six.push(res[index]);
        }
        index++;
      }
      page.push(six);
      six = [];
    }
    console.log(page);
    setshowdata(page);
    setpageindex(0);
  };

  const view_click = (i) => {
    console.log(showdata[pageindex][i])
  }



  const page_change = (page_num_str) => {
    if (page_num_str == "+") {
      setpageindex(pageindex + 1);
    } else if (page_num_str == "-") {
      setpageindex(pageindex - 1);
    }
  };

  return (
    <div class="h-screen flex flex-shrink-0 antialiased background_login2">
      <Sidebar />
      <div class="w-10/12 h-full flex ">
        <div class=" w-full flex  justify-center font-sans overflow-auto my-10">
          <div class="w-full lg:w-5/6 flex flex-col">
            <div class="py-8">
              <div class="h-4 bg-blue-600  "></div>
              <div class="px-1 py-5 bg-gray-100 font-bold text-3xl font-mono shadow-2xl rounded-b-lg">
                การจัดการสินค้า
              </div>
              <br></br>
              <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                  <div class="relative w-24 ">
                    <select
                      value={entity}
                      onChange={(e) => setentity(e.target.value)}
                      class="text-center h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="block relative">
                  <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      viewBox="0 0 24 24"
                      class="h-4 w-4 fill-current text-gray-500"
                    >
                      <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                    </svg>
                  </span>
                  <input
                    value={searchValue}
                    onChange={(e) => setsearchValue(e.target.value)}
                    placeholder="Search"
                    class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button className="w-24 border rounded-lg bg-yellow-300">
                    เพิ่ม
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white shadow-md rounded ">
              <table class="min-w-max w-full ">
                <thead>
                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ">
                    <th class="py-3 px-6 text-left bg-blue-500 text-white rounded-tl-[1rem] ">ลำดับ</th>
                    <th class="py-3 px-6 text-left bg-blue-500 text-white">ชื่อสินค้า</th>
                    <th class="py-3 px-6 text-center bg-blue-500 text-white rounded-tr-[1rem]">การจัดการ</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  {showdata[pageindex] &&
                    showdata[pageindex].length > 0 &&
                    showdata[pageindex].map((p, index) => (
                      <tr
                        key={index}
                        class="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            {/* <div class="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                                style={{ fill: "#000000" }}
                              >
                                <path
                                  fill="#80deea"
                                  d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                                ></path>
                                <path
                                  fill="#80deea"
                                  d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                                ></path>
                                <path
                                  fill="#80deea"
                                  d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                                ></path>
                                <circle
                                  cx="24"
                                  cy="24"
                                  r="4"
                                  fill="#80deea"
                                ></circle>
                              </svg>
                            </div> */}
                            <span class="font-medium">{p.id}</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                          <div class="flex items-center">
                            <div class="mr-2">
                              <img
                                class="w-6 h-6 rounded-full"
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                              />
                            </div>
                            <span>{p.pd_name}</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-center">
                          <div class="flex item-center justify-center">
                            <div onClick={() => view_click(index)} class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 mx-1 text-blue-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </div>
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 mx-1 text-blue-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </div>
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 mx-1 text-blue-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        {/* <td class="py-3 px-6 text-left">
                      <div class="flex items-center justify-center">
                        <button className="border rounded-full p-1 mx-1">View</button>
                        <button className="border rounded-full p-1 mx-1">Edit</button>
                        <button className="border rounded-full p-1 mx-1">Delete</button>
                      </div>
                    </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
              <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span class="text-xs xs:text-sm text-gray-900">
                  Showing {pageindex + 1} to {showdata.length}
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    onClick={() => page_change("-")}
                    disabled={pageindex < 1 ? true : false}
                    class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => page_change("+")}
                    disabled={pageindex >= showdata.length - 1 ? true : false}
                    class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inbox;


export default function OrderList() {
    return (
        <>
            {/* order list component design included here ................................................  */}
            <div className='bg-[#F5F5F5]'>
                <div className='p-4 md:flex md:justify-between'>
                    <div className='mb-4 md:mb-0 md:mr-4'>
                        <h1 className='text-4xl font-bold text-center'>Orders</h1>
                        <p className='text-center'>Home <svg className='inline w-4 h-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M6 6l8 4-8 4V6zm2 5v2H8v-2h.017L10 11zm2-2v4H8v-4h2z' /></svg> Order</p>
                    </div>
                    <div>
                        <button className='bg-[#111940] text-white p-1 px-2 rounded-lg'>+ New Order</button>
                    </div>
                </div>

                {/* table part with filter part goes here ................................................. */}
                <div className='p-4 bg-[#F9F9FF]'>
                    <div >
                        {/* header first part where search and filter and column start here ................  */}
                        <div className="flex justify-between">
                            {/* Left side elements */}
                            <div className="flex justify-between">
                                {/* Search field with icon start here ........................................*/}
                                <div className="relative  ">
                                    <input
                                        className="pl-10 lg:w-[250px] lg:h-[24px] border border-[#ccc] rounded-[4px] text-gray-700 focus:outline-none focus:ring focus:border-gray-200 sm:w-[100px] sm:h-[32px] md:w-[300px] md:h-[40px]"
                                        type="text"
                                        placeholder="Search"
                                    />
                                    {/* icon for search button ............  */}
                                    <div className="absolute inset-y-0 pl-3 bottom-1 flex justify-center items-center pointer-events-none">
                                        <svg
                                            className="lg:w-4 lg:h-4 text-gray-500 sm:w-3 sm:h-3 md:w-6 md:h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.447 13.776l4.42 4.42a1 1 0 1 1-1.415 1.414l-4.42-4.42a8 8 0 1 1 1.415-1.414zm-5.447 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>

                                </div>

                                {/* Search field with icon start here ........................................*/}


                                {/* Filter button with will be end here and the modal view................... */}
                                <div className="sm:mx-1 md:mx-2 lg:mx-3">
                                    <button className="bg-white text-gray-700 border border-[#ccc] rounded-[4px] lg:w-[66px] lg:h-[24px] sm:w-[100px] sm:h-[32px] md:w-[120px] md:h-[40px]">
                                        Filter
                                    </button>
                                </div>
                                {/* Filter button with will be start here and the modal view................... */}

                            </div>

                            {/* Right side elements */}
                            <div>
                                {/* Column button with dropdown options */}
                                <div className="sm:mx-1 md:mx-2 lg:mx-3">
                                    <button className=" bg-white w-[78px] h-[24px] text-gray-700  rounded-[4px] border border-[#ccc]">
                                        Column
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* header first part where search and filter and column end here ...................  */}

                        {/* header second  part start here...................................................  */}
                        <div>
                            <div>
                                <div className='flex justify-between mt-3'>

                                    <div className='flex justify-start'>
                                        <input type='text' className='w-[153px] h-[24px] p-2 border border-[#ccc] rounded-[4px]' placeholder='Action' />

                                        <p className='mx-2'> 400 records </p>
                                        <div className="">
                                            <button className="bg-white text-gray-700 px-2  border border-[#CCC] rounded-[4px]">
                                                Export
                                            </button>
                                        </div>
                                    </div>

                                    <div className='flex justify-start items-center'>
                                        <div className="input-field w-16 items-center border border-gray-300 rounded-[4px]">
                                            {/* <input
                                                className="appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none"
                                                type="text"
                                                placeholder="Enter text"
                                            /> */}
                                            <select className="border-none bg-transparent text-gray-700 w-full focus:outline-none">
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                                <option value="40">40</option>
                                            </select>
                                        </div>

                                        <div className='px-2'>
                                            <p>Per Page</p>
                                        </div>
                                        
                                        <div className=''>
                                            <div className="flex items-center justify-center">
                                                <button className="mx-2 w-[26px] h-[25px] bg-[#EEF2F7] rounded-[4px] focus:outline-none">
                                                    <svg className="h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>

                                                <button className=" mr-2 w-[26px] h-[25px] bg-[#EEF2F7] rounded-[4px] border border-[#CCC] focus:outline-none">1</button>
                                                <span className="px-3 py-2 rounded-[4px] ">of 2220</span>

                                                <button className="mx-2 w-[26px] h-[25px] bg-[#EEF2F7] rounded-[4px] focus:outline-none">
                                                    <svg className="h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* header second  part end here....................................................  */}
                    </div>

                    {/* talbe row data gose here ............................................................  */}
                    <div>
                        <h1>Main Table</h1>
                        <div className="container mx-auto py-8">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className='bg-[#F0F0FF]'>
                                        <th className="px-4 py-2">Check</th>
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Purchase Point</th>
                                        <th className="px-4 py-2">Purchase Date</th>
                                        <th className="px-4 py-2">Bill-to Name</th>
                                        <th className="px-4 py-2">Ship-to Name</th>
                                        <th className="px-4 py-2">Grand Total</th>
                                        <th className="px-4 py-2">Status</th>
                                        <th className="px-4 py-2">Action</th>
                                        <th className="px-4 py-2">Mailchimp Sync</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-100">
                                        <td className="border px-4 py-2"><input type="checkbox" /></td>
                                        <td className="border px-4 py-2">1</td>
                                        <td className="border px-4 py-2">Purchase Point 1</td>
                                        <td className="border px-4 py-2">2023-05-21</td>
                                        <td className="border px-4 py-2">John Doe</td>
                                        <td className="border px-4 py-2">DHL</td>
                                        <td className="border px-4 py-2">2344</td>
                                        <td className="border px-4 py-2 text-green-500">Complete</td>
                                        <td className="border px-4 py-2">
                                            <small>Edit</small>
                                        </td>
                                        <td className="border px-4 py-2">omg@gmail.com</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="border px-4 py-2"><input type="checkbox" /></td>
                                        <td className="border px-4 py-2">2</td>
                                        <td className="border px-4 py-2">Purchase Point 2</td>
                                        <td className="border px-4 py-2">2023-05-21</td>
                                        <td className="border px-4 py-2">Mr. Rofis</td>
                                        <td className="border px-4 py-2">DHL</td>
                                        <td className="border px-4 py-2">2344</td>
                                        <td className="border px-4 py-2 text-red-500">Processing</td>
                                        <td className="border px-4 py-2">
                                            <small>Edit</small>
                                        </td>
                                        <td className="border px-4 py-2">omg@gmail.com</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="border px-4 py-2"><input type="checkbox" /></td>
                                        <td className="border px-4 py-2">3</td>
                                        <td className="border px-4 py-2">Purchase Point 3</td>
                                        <td className="border px-4 py-2">2023-05-21</td>
                                        <td className="border px-4 py-2">Mr. Blipi</td>
                                        <td className="border px-4 py-2">Karla</td>
                                        <td className="border px-4 py-2">2344</td>
                                        <td className="border px-4 py-2 text-green-500">completed</td>
                                        <td className="border px-4 py-2">
                                            <small>Edit</small>
                                        </td>
                                        <td className="border px-4 py-2">omg@gmail.com</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="border px-4 py-2"><input type="checkbox" /></td>
                                        <td className="border px-4 py-2">4</td>
                                        <td className="border px-4 py-2">Purchase Point 5</td>
                                        <td className="border px-4 py-2">2023-05-21</td>
                                        <td className="border px-4 py-2">Mr. Blipi</td>
                                        <td className="border px-4 py-2">Karla</td>
                                        <td className="border px-4 py-2">2344</td>
                                        <td className="border px-4 py-2 text-red-500">Processing</td>
                                        <td className="border px-4 py-2">
                                            <small>Edit</small>
                                        </td>
                                        <td className="border px-4 py-2">omg@gmail.com</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="border px-4 py-2"><input type="checkbox" /></td>
                                        <td className="border px-4 py-2">5</td>
                                        <td className="border px-4 py-2">Purchase Point 5</td>
                                        <td className="border px-4 py-2">2023-05-21</td>
                                        <td className="border px-4 py-2">Mr. Blipi</td>
                                        <td className="border px-4 py-2">Karla</td>
                                        <td className="border px-4 py-2">2344</td>
                                        <td className="border px-4 py-2 text-green-500">completed</td>
                                        <td className="border px-4 py-2">
                                            <small>Edit</small>
                                        </td>
                                        <td className="border px-4 py-2">omg@gmail.com</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

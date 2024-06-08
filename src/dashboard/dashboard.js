import React, { useState, useEffect, useRef } from 'react'
import Header from '../pages/header'
import axios from 'axios';
function Dashboard() {
     const chartRef = useRef(null);
     const [users, setUsers] = useState([]);
     const [admin, setAdmin] = useState(0);
     const [user, setUser] = useState(0);


     useEffect(() => {
          axios.get('http://localhost:3000/auth/users/list', {
               headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
               }
          })
               .then(response => {
                    setUsers(response.data.data)
                    getUserType(response.data.data)
               })
               .catch(error => {
                    // Handle error
                    console.error('Error fetching data:', error);
               });

               

     }, [admin, user])


      const getUserType =(data)=>{
          let countUser=0;
          let countAdmin=0
          for (let x = 0; x < data.length; x++) {
               if (data[x].userType == 'ADMIN') {
                    countAdmin = countAdmin + 1 
               } else {
                    countUser = countUser + 1 
               }
          }
          setUser(countUser)
          setAdmin(countAdmin)

      }
     return (
          <div className='row'>
               <Header />
               <div className='col-12 row'>
                    <div className='col-3 p-4 m-3 d-flex bg-light rounded  shadow'>
                         <small> Total Users</small>
                         <strong className='text-primary p-3 display-2'>{users.length}</strong>
                    </div>
                    {/* <div className='col-2'></div> */}
                    <div className='col-3 p-4 m-3 d-flex bg-light rounded  shadow'>
                         <small>User's</small>
                         <strong className='text-primary p-3 display-2'>{user}</strong>
                    </div>
                    {/* <div className='col-2'></div> */}
                    <div className='col-3 p-4 m-3 d-flex bg-light rounded  shadow'>
                         <small>Admin </small>
                         <strong className='text-primary p-3 display-2'>{admin}</strong>
                    </div>

               </div>
               <div className='col-12 row m-1'>

                    <div className='col-5 p-2 m-0 rounded shadow'>
                         <div class="block w-full overflow-x-auto ">
                              <table class="items-center w-full bg-transparent border-collapse">
                                   <thead>
                                        <tr>
                                             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-800 text-light border-light-700">Name</th>
                                             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-800 text-light border-light-700">Email</th>
                                             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-800 text-light border-light-700">
                                                  Type
                                             </th>
                                             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-800 text-light border-light-700">Date </th>

                                        </tr>
                                   </thead>
                                   <tbody>
                                        {users.map((obj, index) =>
                                        (
                                             <tr>

                                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{obj?.name}</td>
                                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                       <i class="fas fa-circle text-orange-500 mr-2"></i>{obj?.email}</td>
                                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                       <small className='text-white p-1 rounded' style={obj.userType === 'USER' ? { backgroundColor: 'yellow' } : { backgroundColor: 'blue' }}>{obj.userType}</small>
                                                  </td>

                                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                                       {/* {Date(obj?.date)} */}
                                                       {Date(obj?.registered).substring(0, 15)}


                                                  </td>
                                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                       <div class="flex items-center">
                                                            <span class="mr-2">{obj?.percentage
                                                            }%</span>
                                                            <div class="relative w-full">
                                                                 <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                                      <div style={{
                                                                           width: ` ${obj?.percentage}`
                                                                      }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </td>

                                             </tr>
                                        )

                                        )}
                                   </tbody>
                              </table>
                         </div>

                    </div>
                    <div className='col-1'>
                    </div>
                    <div className='col-5 p-2  rounded shadow'><canvas ref={chartRef}></canvas></div>


               </div>

          </div >
     );
}

export default Dashboard;

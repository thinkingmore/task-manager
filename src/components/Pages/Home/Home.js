import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext);
    const [ task, setTask] = useState([]);

    const navigate= useNavigate();
    const form = "/";

    useEffect(()=>{
        fetch(`http://localhost:5000/tasks/${user?.email}`)
        .then(res=> res.json())
        .then(data=> setTask(data))
    },[user?.email])

    const handleAddStatus = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT', 
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
           navigate(form, {replace: true})
            
        })
        
        .catch(error=> console.error(error))
    }
    return (
        <div>
            <h2 className='text-2xl my-6'>My Task</h2>
            <div className="overflow-x-auto relative">
                <table className="w-3/4 mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { task.map(task=>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            key= {task._id}  
                            >
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {task.title}
                                </th>
                                <td className="py-4 px-6">
                                <img src={task.image} className="w-10 h-10 rounded-full"  alt="task"/>
                                </td>
                                <td className="py-4 px-6">
                                    {task.description}
                                </td>
                                <td className="py-4 px-6">
                                    <button onClick={()=> handleAddStatus(task._id)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Completed</button>
                                </td>
                            </tr> 
                            )}
                            
                    </tbody>
                </table>
            </div>       
        </div>
    );
};

export default Home;
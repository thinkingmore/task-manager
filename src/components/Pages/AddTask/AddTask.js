import React from 'react';

const AddTask = () => {

    const addTaskHandler = (e) =>{
       
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const desc = form.desc.value;
        
        const newTask = {
            title: title,
            description: desc
        }
    }
    return (
        <div>    
            <h2 className='mb-6 text-4xl'>Add a Task</h2>      
            <form onSubmit={addTaskHandler} className='w-3/4 mx-auto'>
            <div className="grid md:grid-cols-3 md:gap-6">
                <div>
                    <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" name="title" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a title to your task" required/>
                </div>
                <div>
                    <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" name="desc" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write some description" required/>
                </div>
                <div className="relative z-0 mb-6 w-full group">     
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                </div>
                <div className="relative z-0 mb-6 w-full group">     
                    
                </div>
            </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-1/4 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
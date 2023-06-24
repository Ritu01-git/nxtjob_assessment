"use client"
import Image from 'next/image'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { AiFillDatabase, AiOutlineUsergroupDelete, AiOutlineVerticalAlignBottom, AiOutlineUndo, AiFillBulb, AiTwotoneBug, AiOutlineHome, AiTwotoneAppstore, AiFillCopyrightCircle, AiFillBell, AiOutlineSearch } from "react-icons/ai";
import Modal from "./Modal";
import { Fragment, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import dynamic from 'next/dist/shared/lib/dynamic';

const Column = dynamic(() => import("./Column"), { ssr: false });
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const initialData = {
    tasks: {
      1: { id: 1, content: "Application is saved" },
      2: { id: 2, content: "Application is Applied" },
      3: { id: 2, content: "Application is InProgress" },
      4: { id: 4, content: "Application is Offered" }
    },
    columns: {
      "saved": {
        id: "saved",
        title: "Saved",
        taskIds: [1, 2, 3, 4]
      },
      "applied": {
        id: "applied",
        title: "Applied",
        taskIds: []
      },
      "inprogress": {
        id: "inprogress",
        title: "Inprogress",
        taskIds: []
      },
      "offer": {
        id: "offer",
        title: "Offer",
        taskIds: []
      },
    },
    columnOrder: ["saved", "applied", "inprogress", "offer"]
  };
  const ondragend = (result) => {
    const { destination, source } = result;
    //droping unknown place
    if (!destination) return;

    //dropping same position
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    //dropping in same column
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];
    if (sourceCol.id === destinationCol.id) {
      return;
    }
    //dropping at another column
    if (destination.droppableId != source.droppableId) {
      console.log("correct...")
      const startTaskIds = Array.from(sourceCol.taskIds);
      const [removed] = startTaskIds.splice(source.index, 1);
      const newStartCol = {
        ...sourceCol,
        taskIds: startTaskIds,
      }
      const endTaskIds = Array.from(destinationCol.taskIds);
      endTaskIds.splice(destination.index, 0, removed);

      const newEndCol = {
        ...destinationCol,
        taskIds: endTaskIds,
      }

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStartCol.id]: newStartCol,
          [newEndCol.id]: newEndCol,
        },
      };
      setState(newState);
    }

  };
  const [state, setState] = useState(initialData)
  return (
    <Fragment>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-whute-900">
          <div className="flex flex-wrap items-center justify-between mx-5 p-2">
            <a href="https://nxtjob.ai/" className="flex items-center">
              <img src="https://media.licdn.com/dms/image/D4D0BAQHWdze09MNhzA/company-logo_100_100/0/1684222733675?e=2147483647&v=beta&t=yyPb8iD2329gXMmpiDmzPK6YhRmAsOikC6CdzmUoO1g" className="h-18 mr-3" alt="Flowbite Logo" />
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white-900 dark:border-gray-700">
                <li className=' h-[50px] flex items-center'>
                  <a href="#" className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent navbarContent">Resume Builder<CaretDownIcon className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden /></a>
                </li>
                <li className=' h-[50px] flex items-center'>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent navbarContent">Cover Letter<CaretDownIcon className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden /></a>
                </li>
                <li className=' h-[50px] flex items-center'>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-balck md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent navbarContent">LinkedIn Review<CaretDownIcon className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden /></a>
                </li>
                <li className=' h-[50px] flex items-center'>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white  md:dark:hover:bg-transparent navbarContent">Interview<CaretDownIcon className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden /></a>
                </li>
                <li>
                  <button className=' bg-purple-200 flex items-center h-[50px] rounded w-[200px] justify-center'>
                    <a href="#" className="block py-2 pl-3 pr-4 text-purple-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 dark:text-black md:dark:hover:text-purple-500 dark:hover:bg-purple-500 dark:hover:text-white 	pl0-px md:dark:hover:bg-transparent navbarContent">Job Tracking Network<CaretDownIcon className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden /></a>
                  </button>
                </li>
              </ul>
            </div>
            <div className="profile flex justify-between gap-4 items-center">
              <AiFillBell size={30} className='cursor-pointer'/>
              <AiFillCopyrightCircle color='#57A4F2' size={50} className='cursor-pointer' />
            </div>
          </div>
        </nav>
        <div className='grid-container px-[10px] py-[15px]'>
          <div className="menu">
            <div className='bg-slate-200 rounded-lg h20-px w-[210px] sidebar grid grid-rows-6'>
              <div className='p-3.5 items-center bg-[#8246FD] flex gap-1 hover:bg-[#8246FD] rounded-lg cursor-pointer'><AiFillDatabase size={30} />Boards</div>
              <div className='p-3.5 items-center flex gap-1 hover:bg-[#8246FD] rounded-lg cursor-pointer'><AiOutlineUsergroupDelete size={30} />Networking</div>
              <div className='p-3.5 items-center flex gap-1 hover:bg-[#8246FD] rounded-lg cursor-pointer'><AiOutlineVerticalAlignBottom size={30} />Archive Jobs</div>
              <div className='p-3.5 items-center flex gap-1 hover:bg-[#8246FD] rounded-lg cursor-pointer'><AiOutlineUndo size={30} />Loop Settings</div>
              <hr />
              <div className='p-3.5 items-center flex gap-1 hover:bg-[#8246FD] rounded-lg cursor-pointer'><AiFillBulb size={30} />Suggest A Feature</div>
              <div className='p-3.5 items-center flex gap-1 hover:bg-[#8246FD] rounded-lg cursor-pointer'><AiTwotoneBug size={30} />Report an Issue</div>
            </div>
          </div>
          <div className="header ">
            <div className=' bg-slate-50 rounded-lg shadow-md	 rightbar flex justify-between items-center h-20'>
              <div className='text-xl items-center font-semibold	flex pl-2.5'>
                My 2023 Job Search
              </div>
              <div className='h-[50px] flex items-center'>
                <input className='border border-gray-300 rounded h-[50px] p-3 focus:ring-gray-500 focus:border-gray-500 dark:focus:gray-blue-500 dark:focus:border-gray-500 mr-[10px]' type="text" placeholder='Search' />
                <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>Create</button>
              </div>
            </div>
          </div>
          <DragDropContext onDragEnd={ondragend}>
            <div className='flex gap-3'>
              {state.columnOrder.map((columnId) => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

                return <Column key={column.id} column={column} task={tasks} />;
              })}
            </div>
          </DragDropContext>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)} selectedItem={setSelectedItem} />
        </div>
      </div>
    </Fragment>
  )
}

"use client"
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiTwotoneAppstore } from "react-icons/ai";
import { AiFillDatabase, AiOutlineUsergroupDelete, AiOutlineVerticalAlignBottom, AiOutlineUndo, AiFillBulb, AiTwotoneBug, AiOutlineSave, AiTwotoneEdit, AiFillCopyrightCircle, AiFillMessage } from "react-icons/ai";
import ReactMarkdown from 'react-markdown';


const Modal = ({ isVisible, onClose, selectedItem }:any) => {
    // if (!isVisible) return null;
    const [selectedDiv, setSelectedDiv] = useState("");
    const [editableContent, setEditableContent] = useState('Markdown Supported here..');
    const [editableNote, setEditableNote] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    if (!isVisible) return null;


    const handleButtonClick = (selected: any) => {
        console.log(selected)
        setSelectedDiv(selected);
    };
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = () => {
        setIsEditing(false);
    };
    const handleInputChange = (event : any) => {
        setEditableContent(event.target.value);
    };
    const handleEditNote = (event: any) => {
        setEditableNote(event.target.value);
    }

    const renderSelectedDiv = () => {
        console.log(selectedDiv)
        switch (selectedDiv) {
            case 'div1':
                return <div><div className='flex item-center justify-between'>
                    <div className="heading p-7 font-semibold text-xl">
                        Description
                    </div>
                    {isEditing ? (
                        <div className='flex justify-center items-center mr-[10px]'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSaveClick} >Save</button>
                        </div>
                    ) : (
                        <div>
                            <button className='p-7' onClick={handleEditClick}><AiTwotoneEdit size={25} /></button>
                        </div>
                    )}
                </div>
                    <div className="abouthejob pl-7 text-lg">
                        About the Job
                    </div>
                    {isEditing ? (
                        <div className='p-7 text-[15px] '>
                            <textarea value={editableContent} onChange={handleInputChange} className='h-[440px] w-[750px] p-[10px]' />
                        </div>
                    ) : (
                        <div className='p-7 text-[15px] '>
                            <ReactMarkdown>{editableContent}</ReactMarkdown>
                        </div>
                    )}
                </div>
                    ;
            case 'div2':
                return <div><div className="heading p-7 font-semibold text-xl">
                    Company Info
                </div>
                    <div className="abouthejob pl-7 text-lg flex items-center">
                        <div><AiTwotoneAppstore size={80} /></div>
                        <div className='font-semibold text-[20px]'>PIXESTER STUDIO</div>
                    </div>
                    <div className='p-7'>
                        Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.
                    </div></div>;
            case 'div3':
                return <div>
                    <div className='flex justify-between'>
                        <div className="heading p-7 font-semibold text-xl">
                            Notes
                        </div>
                        <div className='flex items-center'><button className='p-7 bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg' onClick={handleEditClick}>Create New Note</button></div></div>
                    <div className="flex justify-center flex-col items-center">
                        {
                            isEditing ? (
                                <textarea value={editableNote} onChange={handleEditNote} className='h-[440px] w-[750px] p-[10px]' />
                            ) : (editableNote === "" ? (<div><AiOutlineSave size={300} color='#C9BCE3' /><div>No notes created</div></div>) : (<div className='flex text-left '> {editableNote} </div>)
                            )
                        }
                        {
                            isEditing ? (<button className='p-7 bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg' onClick={handleSaveClick}>Save</button>)
                                : (
                                    <div></div>
                                )
                        }
                    </div></div>;
            case 'div4':
                return <div><div className="heading p-7 font-semibold text-xl">
                    Your network
                </div>
                    <div className="abouthejob pl-7 text-lg">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
                            <div className="border-r border-b border-l  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className=" flex gap-16 items-center">
                                    <AiFillCopyrightCircle size={70} color='#57A4F2' />
                                    <div className='flex flex-col'>
                                        <div className="text-gray-900 font-bold text-lg mb-2">Monisha Rout</div>
                                        <div className='text-xs text-gray-400'>UI UX designer at Crisil</div>
                                    </div>
                                    <p className="text-gray-400 text-base">Name of the company</p>
                                    <p className="text-gray-400 text-base">17 June, 2023</p>
                                    <AiFillMessage color='#57A4F2' size={30}/>
                                </div>
                            </div>
                        </div>
                    </div></div>;
            default:
                return <div><div className="heading p-7 font-semibold text-xl">
                    Description
                </div>
                    <div className="abouthejob pl-7 text-lg">
                        About the Job
                    </div>
                    <div className='p-7 text-[15px] '>
                        Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.

                        As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork – all essential skills for a successful career in this field.

                    </div></div>;
        }
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[1144px] h-[730px]'>
                <div className='bg-white p-2 rounded flex flex-col h-[880px]'>
                    <button className='text-black text-xl flex justify-end' onClick={() => onClose()}>
                        <AiOutlineClose />
                    </button>
                    <div className="header1 p-3.5">
                        <div className="item2"><AiTwotoneAppstore size={80} /></div>
                        <div className="item3">
                            <div className="text text-xl font-semibold">UI UX Designer ( Mobile Apps)</div></div>
                        <div className="item4">View Job Details</div>
                    </div>
                    <hr />
                    <div className="dashboard p-5">
                        <div className="sidebar"> <div className="menu">
                            <div className='bg-slate-50  w-56 sidebar grid grid-rows-4'>
                                <div className='p-3.5 items-center flex gap-1 role1' onClick={() => handleButtonClick('div1')} style={{ backgroundColor: selectedDiv === 'div1' ? '#F7F3FF' : '' }}><AiFillDatabase size={30} />Job Description</div>
                                <div className='p-3.5 items-center flex gap-1 role1' onClick={() => handleButtonClick('div2')} style={{ backgroundColor: selectedDiv === 'div2' ? '#F7F3FF' : '' }}><AiOutlineUsergroupDelete size={30} />Company</div>
                                <div className='p-3.5 items-center flex gap-1 role1' onClick={() => handleButtonClick('div3')} style={{ backgroundColor: selectedDiv === 'div3' ? '#F7F3FF' : '' }}><AiOutlineVerticalAlignBottom size={30} />Note</div>
                                <div className='p-3.5 items-center flex gap-1 role1' onClick={() => handleButtonClick('div4')} style={{ backgroundColor: selectedDiv === 'div4' ? '#F7F3FF' : '' }}><AiOutlineUndo size={30} />Networking</div>
                            </div>
                        </div></div>
                        <div className="contentOfSidebar w-[840px] h-[617px] bg-slate-100">
                            {renderSelectedDiv()}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
import React from 'react'
import { useState } from 'react';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { AiTwotoneAppstore } from "react-icons/ai";
import Modal from './Modal';

const Column = ({ column, task } : any) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div>
      {/* <div className="content"> */}
      <div className="my-10 flex ">
        <div className="content1 w-2/3 bg-slate-200 h-96 rounded-lg shadow-md font-semibold flex flex-col p-5 text-xl">
          {column.title}
          {/* <div className='container'> */}
          <Droppable droppableId={column.id}>
            {(droppableProvided, droppableSnapshot) => (
              <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                {task.map((task: any, index: any) => (
                  <Draggable key={task.id} draggableId={`${task.id}`} index={index} >
                    {(draggebleProvided, draggableSnapshot) => (
                      <div className="flex items-center justify-around max-w-sm cards rounded overflow-hidden bg-white"
                        ref={draggebleProvided.innerRef}
                        {...draggebleProvided.dragHandleProps}
                        {...draggebleProvided.draggableProps
                        } onClick={() => setShowModal(true)}>
                        <AiTwotoneAppstore size={50} />
                        <div className='flex flex-col'>
                          <div className=" text-lg">{task.content}</div>
                          <div className='text-sm text-slate-400'>
                            Ajmera Infotech Inc.
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
          {/* </div> */}
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} selectedItem={setSelectedItem} />
    </div>
  )
}
export default Column



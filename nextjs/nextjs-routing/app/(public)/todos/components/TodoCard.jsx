"use client";
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {Trash} from 'lucide-react'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeTodo, deleteTodo } from "@/actions/todoActions";
import { toast } from "sonner";

const TodoCard = ({todo}) => {
  const queryClient = useQueryClient();
  const {title, isCompleted} = todo;

  // toggle status mutation start -----------------------------------
  const {mutate:toggleStatus} = useMutation({
    mutationFn: ({id, isCompleted}) => completeTodo(id, isCompleted),

    onSuccess: (response) =>{
      if(response.success){
        toast.success(response.message, {
          action:{
            label: "close",
          }
        });
        queryClient.invalidateQueries({ queryKey: ["get_todos"] });
      }else{
        toast.error(response.message, {
          action:{
            label: "close",
          }
        });
        console.log(response.message);
      }
    }
  });
  // toggle status mutation ended -----------------------------------

  // delete todo mutation start ------------------------------------
  const { mutate:deletetodo } = useMutation({
    mutationFn: (id)=>deleteTodo(id),
    onSuccess:(response)=>{
      if(response.success){
        toast.success(response.message, {
          description: `Todo Title: ${title}`,
          action:{
            label: "close",
          }
        });
        queryClient.invalidateQueries({ queryKey: ["get_todos"] });
      }else{
        toast.error(response.message, {
          description: `Todo Title: ${title}`,
          action:{
            label: "close",
          }
        });
        //console.log(response.message);
      }
    },
    onError: () => {
      toast.error('Failed to delete todo');
    }
  })
  // delete todo mutation ended ------------------------------------

  return (
    <div className='flex gap-1 px-2 py-2 border border-gray-400 mb-1 justify-between w-[300px]'>

      <label className='flex gap-1'>
        {/* {title} */}
      <Checkbox
        checked={todo.isCompleted}
        onCheckedChange={(checked) => {
          toggleStatus({
            id: todo._id,
            isCompleted: checked,
          });
        }}
      /> 
        <span className={cn("text-black", isCompleted && "line-through text-gray-400")}>{title}</span>
      </label>
      {isCompleted ? "true" : "false"}
      <Button variant="destructive" onClick={() => deletetodo(todo._id)}><Trash size={20} /></Button>
    </div>
  )
}

export default TodoCard
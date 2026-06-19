"use client";
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {Trash} from 'lucide-react'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeTodo } from "@/actions/todoActions";
import { toast } from "sonner";

const TodoCard = ({todo}) => {
  const queryClient = useQueryClient();
  const {title, isCompleted} = todo;

  const mutation = useMutation({
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

  return (
    <div className='flex gap-1 px-2 py-2 border border-gray-400 mb-1 justify-between w-[300px]'>

      <label className='flex gap-1'>
        {/* {title} */}
      <Checkbox
        checked={todo.isCompleted}
        onCheckedChange={(checked) => {
          mutation.mutate({
            id: todo._id,
            isCompleted: checked,
          });
        }}
      /> 
        <span className={cn("text-black", isCompleted && "line-through text-gray-400")}>{title}</span>
      </label>
      {isCompleted ? "true" : "false"}
      <Button variant="destructive"><Trash size={20} /></Button>
    </div>
  )
}

export default TodoCard
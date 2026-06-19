"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "@/actions/todoActions";
import { toast } from "sonner";

const TodosForm = () => {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('');

    const mutation = useMutation({
        mutationFn: (data) => addTodo(data),
        onSuccess: (response) =>{
            // todo state invalidation
            console.log(response);
            if(response.success){
                toast.success('Todo added successfully',{
                // description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: "close",
                    // onClick: () => console.log("Undo"),
                },
            });
                queryClient.invalidateQueries({queryKey: ['get_todos']});
                setTitle('');
            }else{
                toast.error(response.message, {
                // description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: "Undo",
                    // onClick: () => console.log("Undo"),
                },
            });
                console.log(response.message);
            }
        },
        onError: () => {
            toast.error('Failed to add todo');
        }
    })

    const todoFormAction = (e) => {
        e.preventDefault();
        console.log(title);
        mutation.mutate({ title });
    }
  return (
    <div>
        <form onSubmit={todoFormAction}>
            <input type="text" placeholder='Enter todo title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Button 
                type='submit'
                disabled={mutation.isPending}
            >
                { mutation.isPending ? 'Adding...' : 'Add Todo' }
            </Button>
        </form>



    </div>
  )
}

export default TodosForm
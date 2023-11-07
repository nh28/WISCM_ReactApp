import { HStack, useToast } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
  Input,
} from '@chakra-ui/react'

function AddTodo({addTodo, todos}) { 
    const [todoText, setTodoText] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const handleInputChange = (e) => {
      setTodoText (e.target.value);
    }
    const handleAddTodo = () =>{
      if (todoText.trim() !==''){
        const newTodo = {
          id:todos.length +1,
          body: todoText, 
        };
        addTodo(newTodo);
        setTodoText('');
        onClose();
      }
    };
    return (
      <>
            <Button onClick={onOpen}>Add</Button>
            <AlertDialog
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
            >
              <AlertDialogOverlay />
      
              <AlertDialogContent>
                <AlertDialogHeader>Add item</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  <Input placeholder = 'Type in something to do'
                    value = {todoText}
                    onChange = {handleInputChange}
                  />
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='green' ml={3} onClick={handleAddTodo}>
                    Add
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
      )
};
export default AddTodo;
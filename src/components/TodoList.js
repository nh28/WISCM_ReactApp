import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
  propNames,
  Card,
  CardBody,
  Box,
  Heading,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
function TodoList({todos, deleteTodo}) {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {todos.map((items, index)=>(
            <Box key={index} minWidth="500">
              <Heading size = "xs" textTransform="uppercase">
                No. {items.id}
              </Heading>
              <Flex justify="space-between" align="center">
                <Text>
                  {items.body}
                </Text>
                <IconButton
                  aria-label="Delete"
                  icon={<FaTrash />}
                  onClick={()=>deleteTodo(items.id)}
                />
              </Flex>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default TodoList;

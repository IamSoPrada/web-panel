import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import randomColor from "randomcolor";
import { IList, ITodo } from "@/types/types";
import { Input } from "@/components/Input";
import {
  ListContainer,
  Button,
  PlusIcon,
  Wrapper,
  CardTitle,
  FormContainer,
} from "@/styles";

interface ColumnContainerProps extends IList {
  addTodo: (todo: ITodo) => void;
}

export const List: React.FC<ColumnContainerProps> = ({
  title,
  id,
  todos,
  addTodo,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const isEmptyString = (text: string) => text.trim() === "";

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isEmptyString(inputValue)) {
      addTodo({
        id: uuid(),
        listId: id,
        text: inputValue,
        bgColor: randomColor(),
        isDone: false,
      });
    }
    setInputValue("");
    setIsVisible(!isVisible);
  };

  return (
    <ListContainer>
      <CardTitle>{title}</CardTitle>
      <Wrapper direction="column" maxHeight="350px">
        {todos?.map((todo) => (
          <Wrapper bgColor={todo.bgColor} direction="row" key={todo.id}>
            {todo.text}
          </Wrapper>
        ))}
      </Wrapper>

      {isVisible && (
        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            handleInputChange={handleInputChange}
            name="todo"
            value={inputValue}
            placeholder="Введите новую задачу"
          />
        </FormContainer>
      )}
      {isVisible || (
        <Button onClick={handleSubmit}>
          <PlusIcon />
        </Button>
      )}
    </ListContainer>
  );
};

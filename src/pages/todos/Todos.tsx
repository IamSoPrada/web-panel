import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { IList, ITodo } from "@/types/types";
import { List } from "@/components/TodoList";
import { MainContainer, Wrapper, Button, FormContainer } from "@/styles/common";
import { Input } from "@/components/Input";
import { PlusIcon } from "@/styles/icons";

interface ListsProps {
  children?: React.ReactNode;
}

export const Lists: React.FC<ListsProps> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const [lists, setLists] = useState<IList[]>([]);

  const isEmptyString = (text: string) => text.trim() === "";

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isEmptyString(inputValue)) {
      setLists([
        ...lists,
        { id: uuid(), title: inputValue.toUpperCase(), todos: [] },
      ]);
    }
    setInputValue("");
    setIsVisible(!isVisible);
  };

  const addTodo = (todo: ITodo) => {
    const newLists: IList[] = lists?.filter((list) =>
      list.id === todo.listId ? list.todos.push(todo) : list
    );
    setLists([...newLists]);
  };

  return (
    <MainContainer justify="start">
      <Wrapper flexWrap direction="column">
        {isVisible && (
          <FormContainer onSubmit={handleSubmit}>
            <Input
              type="text"
              handleInputChange={handleInputChange}
              name="todo"
              value={inputValue}
              placeholder="Введите название колонки"
            />
          </FormContainer>
        )}
        {isVisible || (
          <Button outlined onClick={handleSubmit}>
            <PlusIcon />
            Создать
          </Button>
        )}
      </Wrapper>

      <Wrapper flexWrap direction="row" align="start">
        {lists?.map((list) => (
          <List
            key={list.id}
            id={list.id}
            title={list.title}
            todos={list.todos}
            addTodo={addTodo}
          />
        ))}
      </Wrapper>
    </MainContainer>
  );
};

export interface ITodo {
  id: string;
  listId: string;
  text: string;
  bgColor: string;
  isDone: boolean;
}

export interface IList {
  id: string;
  title: string;
  todos: ITodo[];
}

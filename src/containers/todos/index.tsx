import React from 'react';
import { Row, Col, Card, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoForm } from 'components/AddTodoForm';
import { TodoList } from 'components/TodoList';
import { message } from 'antd';
import { Todo, todoSlice } from 'store/todo';
import { RootState } from 'store/app.store';
import './styles.less';

interface TodosContainerProps {}

export const TodosContainer: React.FunctionComponent<TodosContainerProps> = () => {
  const todos: Todo[] = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();

  const handleFormSubmit = (todo: Todo): void => {
    dispatch(todoSlice.actions.addTodo(todo));
    message.success('Todo added!');
  };

  const handleRemoveTodo = (todo: Todo): void => {
    dispatch(todoSlice.actions.removeTodo(todo));
    message.warn('Todo removed!');
  };

  const handleTodoToggle = (todo: Todo): void => {
    dispatch(todoSlice.actions.toggleTodo(todo));
    message.info('Todo state updated!');
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add Todo"
          subTitle="To add a todo, just fill the form below and click in add todo."
        />
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleTodoToggle}
          />
        </Card>
      </Col>
    </Row>
  );
};

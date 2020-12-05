import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTaskToTaskList } from "../redux/action";

const TasksCard = (props) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { title, id } = props.listoftasksdata;
  const tasksOfTask = useSelector(
    (state) => state.tasksReducer.tasksOfTaskList
  );

  const filterTasksOfTask = tasksOfTask.filter(
    (tasksoftaskdata) => tasksoftaskdata.id === id
  );

  const onSubmit = (data) => {
    data.id = id;
    dispatch(addTaskToTaskList(data));
  };

  return (
    <div className="pt-5">
      <Card border="primary">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <ul>
            <li>
              <Button variant="primary" onClick={handleShow}>
                Add a task
              </Button>
            </li>
          </ul>
          {filterTasksOfTask.map((d) => (
            <li>{d.taskTitle}</li>
          ))}
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <Form.Group controlId="tasktitle">
            <Form.Control
              type="text"
              name="taskTitle"
              placeholder="Task title"
              ref={register({ required: true })}
            />
            {errors.taskTitle && (
              <span className="text-danger">Task Title is required</span>
            )}
          </Form.Group>

          <Form.Group controlId="task-details">
            <Form.Control
              type="text"
              placeholder="Add details"
              name="taskDetail"
              ref={register({ required: true })}
            />
            {errors.taskDetail && (
              <span className="text-danger">Task Detail is required</span>
            )}
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Control
              type="date"
              placeholder="Add date"
              name="date"
              ref={register({ required: true })}
            />
            {errors.date && (
              <span className="text-danger">Date is required</span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Add task to {title}
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default TasksCard;

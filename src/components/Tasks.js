import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import "../App.css";
import TasksCard from "./TasksCard";
import { useDispatch, useSelector } from "react-redux";
import { addToTaskList } from "../redux/action";

const Tasks = () => {
  const [show, setShow] = useState(false);
  const [listTaskTitle, setListTaskTite] = useState("");
  const listOfTasks = useSelector((state) => state.tasksReducer.tasklist);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleAddList = () => {
    dispatch(addToTaskList(listTaskTitle));
    setListTaskTite("");
    handleClose();
  };

  return (
    <Container>
      <Row>
        {listOfTasks.map((listoftasksdata) => (
          <Col md={4}>
            <TasksCard listoftasksdata={listoftasksdata} />
          </Col>
        ))}
      </Row>

      <Button variant="primary" className="add-icon" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="New List"
            onChange={(e) => setListTaskTite(e.target.value)}
            required
          />
          <Button variant="primary" onClick={handleAddList}>
            Save Changes
          </Button>
        </div>
      </Modal>
    </Container>
  );
};

export default Tasks;

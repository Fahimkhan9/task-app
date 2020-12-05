import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "../App.css";
import TasksCard from "./TasksCard";
import { useDispatch, useSelector } from "react-redux";
import { addToTaskList } from "../redux/action";

const Tasks = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [listTaskTitle, setListTaskTite] = useState("");
  const [errorText, setErrorText] = useState("");
  const listOfTasks = useSelector((state) => state.tasksReducer.tasklist);

  const handleAddList = () => {
    dispatch(addToTaskList(listTaskTitle));
    setListTaskTite("");
    handleClose();
  };

  return (
    <div className="container">
      <div className="row">
        {listOfTasks.map((listoftasksdata) => (
          <TasksCard listoftasksdata={listoftasksdata} />
        ))}
      </div>

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
          />
          <Button variant="primary" onClick={handleAddList}>
            Save Changes
          </Button>
        </div>
        <p className="text-danger">{errorText}</p>
      </Modal>
    </div>
  );
};

export default Tasks;

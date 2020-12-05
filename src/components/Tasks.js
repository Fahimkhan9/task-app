import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "../App.css";
import TasksCard from "./TasksCard";

const Tasks = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <TasksCard />
      <Button variant="primary" className="add-icon" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="d-flex">
          <Modal.Title>New List</Modal.Title>
          <Button variant="primary" className="" onClick={handleClose}>
            Save Changes
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Tasks;

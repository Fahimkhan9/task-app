import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const TasksCard = (props) => {
  const { title } = props.listoftasksdata;

  return (
    <div className="col-md-4">
      <Card border="primary">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <ul>
            <li>
              <Button variant="primary">Add a task</Button>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TasksCard;

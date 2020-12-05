import Card from "react-bootstrap/Card";

const TasksCard = () => {
  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>My Tasks</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TasksCard;

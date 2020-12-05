import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
const NavigationBar = () => {
  const [navAvatar, setNavAvatar] = useState();
  useEffect(() => {
    fetch("https://picsum.photos/id/77/info")
      .then((res) => res.json())
      .then((data) => setNavAvatar(data.download_url));
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">TasksBoard</Navbar.Brand>
      <Navbar.Brand href="#home" className="ml-auto">
        <img
          alt=""
          src={navAvatar}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavigationBar;

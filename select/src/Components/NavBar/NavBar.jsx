import { useEffect, useState } from "react";
import { getTopNav } from "./../data/navbars";
import Modal from "./../Modal/Modal"
import './../../App.css';
import ToDo from "./../ToDo/ToDo"
import ToDoForm from "./../ToDo/ToDoForm"

import { Button } from "../Styled/Button.styled";
import { NavWrapper } from "../Styled/NavBar/NavWrapper.styled";
import { Container } from "../Styled/Container.styled";
import { Nav } from "../Styled/NavBar/Nav.styled";
import { NavBrand } from "../Styled/NavBar/NavBrand.styled";
import { NavUl } from "../Styled/NavBar/NavUL.styled";
import { NavToggle } from "../Styled/NavBar/NavToggle.styled";
import { Text_container } from "../Styled/Header/Text.styled";
import { Footer } from "../Styled/Footer/Footer.styled";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };


const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,  
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }
  
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  const[modalActive, setModalActive] = useState(true)
  
  return (
    
    <>
    
      <div className="container_header">
              <div className="header">
                  <Text_container>Основні завдання</Text_container>
                  {todos.map((todo) => {
                      return (
                          <ToDo
                              todo={todo}
                              key={todo.id}
                              toggleTask={handleToggle}
                              removeTask={removeTask}
                              />
                          )
                      })}

              </div>
          </div>
    <Footer>
        <NavWrapper>
          <Container>
            <Nav>
                <NavBrand href="#">
                  Logo
                </NavBrand>
              <Button className="open-btn" onClick={() => setModalActive(true)}>+</Button>
                <Modal active={modalActive} setActive={setModalActive}>
                  <p>Що мудруємо???</p>
                        <ToDoForm addTask={addTask} />
                </Modal>
              <NavUl className={collapse}>
                {navItems.map((item) => (
                  <li key={item.id} className="nav__item">
                    <NavBrand href={item.href} className="nav__link">
                      {item.label}
                    </NavBrand>
                  </li>
                ))}
              </NavUl>
                <NavToggle className={<toogle__icon></toogle__icon>} onClick={onToggle}>
                  <div className="line__1"></div>
                  <div className="line__2"></div>
                  <div className="line__3"></div>
                </NavToggle>
            </Nav>
          </Container>
        </NavWrapper>
    </Footer>
    </>
   
  );
};

export default Navbar;
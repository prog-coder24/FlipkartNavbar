import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
  Container,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./style.css";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Container className="container">
          <div className="start">
            <Navbar.Brand href="#home">
              <Button className="header-first">
                <span className="font-weight-bold">
                  <i className="flipkart">Flipkart</i>
                </span>
                <span className="explore">
                  <i>Explore </i>{" "}
                  <i style={{ color: "#ffe500" }}>
                    Plus
                    <AddIcon className="add-icon" />
                  </i>
                </span>
              </Button>
            </Navbar.Brand>

            <Nav.Link className="searchbar">
              <FormControl
                type="text"
                className="header-second"
                placeholder="Search for products, brands and more"
              />
              <Button className="search-icon">
                <span
                  style={{
                    color: "#2874f0",
                  }}
                >
                  <SearchIcon />
                </span>
              </Button>
            </Nav.Link>
          </div>
          <div className="end">
            <Nav className="header-third">
              <Nav.Link
                href="#myAccount"
                className="end-items-space"
                style={{ color: "#ffffff" }}
              >
                My Account
                <ArrowDropDownIcon />
              </Nav.Link>
              <Nav.Link
                href="more"
                className="end-items-space"
                style={{ color: "#ffffff" }}
              >
                More
                <ArrowDropDownIcon />
              </Nav.Link>
              <Nav.Link href="#cart" style={{ color: "#ffffff" }}>
                <ShoppingCartIcon />
                Cart
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

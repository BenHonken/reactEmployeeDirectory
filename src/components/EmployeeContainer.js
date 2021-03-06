import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmployeeInfo from "./EmployeeInfo";
import SortType from "./SortType";
import SortKey from "./SortKey";
import EmployeeList from "../data/employees.json";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "Ben",
    sortKey: "name.first",
    sortType: 1
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    const searchQuery = this.state.search.trim();
    const searchResults = EmployeeList.filter((employee) => employee.name.first === searchQuery);
    this.setState({ 'result': searchResults });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees();
  };

  render() {
    return (
      <Container>
        <Row>
        <Col size="md-4">
            <SortKey
              handleInputChange={this.handleInputChange}
            />
          </Col>
          <Col size="md-4">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
          </Col>
          <Col size="md-4">
            <SortType
              handleInputChange={this.handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <EmployeeInfo search={this.state.search} sortType={parseInt(this.state.sortType)} sortKey={this.state.sortKey} />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default EmployeeContainer;

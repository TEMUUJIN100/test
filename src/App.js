import React, { Component } from "react";
import "./components/card/d ";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    console.log(object);

    this.state = {
      course: [],
      searchField: "",
    };
  }

  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://1234.mn/api/courses")
      .then((response) => response.json())
      .then((data) => this.setState({ course: data }));
  }

  render() {
    const { course, searchField } = this.state;

    const filteredcourse = course.filter((el) =>
      el.ner.toLowerCase().includes(searchField)
    );

    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Нүүр</Link>
          <Switch>
            <Route path="/course/:id" render={() => <h1>Hello</h1>} />
            <Route path="/">
              <h1>1234.mn сургалтууд</h1>
              <SearchBox onSearch={this.onSearchChanged} />
              <CardList courses={filteredcourse} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

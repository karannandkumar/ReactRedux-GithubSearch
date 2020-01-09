import React, { Component } from "react";
import RepSingle from "./repsingle";
import "./home.css";

class Search extends Component {
  state = {
    search: "",
    repo: [],
    error: false,
    blank: true
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.handleCheck();
    }
  }
  handleCheck = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.state.search !== ""
        ? this.componentDidMount()
        : this.setState({ error: true });
    }, 1500);
  };

  handleInputChange = e => {
    this.setState({
      error: false,
      search: e.target.value
    });
  };

  componentDidMount() {
    const url = `/Search/${this.state.search}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          repo: data.data.items
        });
      })
      .catch(error => {
        console.log(error)
        this.setState({
          error: true
        });
      });
  }

  renderItems = () => {
    if (!this.state.error) {
    
      return this.state.repo.map(item => (
        <div>
          
          <RepSingle key={item.id} item={item}></RepSingle>
        </div>
      ));
    } else {
      return "";
    }
  };

  render() {
    return (
      <div className="searching">
        Github Repository Search
        <div>
          <input
            className="search"
            type="text"
            name="search"
            placeholder="Search"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="container">{this.renderItems()}</div>
      </div>
    );
  }
}

export default Search;

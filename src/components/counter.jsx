import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0,
    imageURL: "https://picsum.photos/100",
    tags: ["tag1", "tag2", "tag3"]
  };

  formatCount() {
    const count = this.state.count
    return count === 0 ? 'Zero' : count
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
  }

  render() {
    return (
      <div>
        <img src = {this.state.imageURL}/>
        <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-success btn-sm">Increment</button>
        {this.renderTags()}

      </div>
    );
  }

}

export default Counter;

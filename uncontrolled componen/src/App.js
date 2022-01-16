import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.x = React.createRef();
    this.y = React.createRef();
  }
  handleSubmit = (event) => {
    alert("Hi input text" + this.x.current.value);
    alert(`${this.y.current.files[0].name}`);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form className="hand" onSubmit={this.handleSubmit}>
          <input type="text" defaultValue="Definitely" ref={this.x} />
          &nbsp;
          <input type="checkbox" defaultChecked />
          <input type="checkbox" />
          <input type="radio" defaultChecked />
          <input type="radio" />
          <textarea defaultValue="ccc" />
          <label for="iii">Selecting one from dropdown</label>
          <select name="I am select" id="iii">
            <option value="op"> pen</option>
            <option value="nop">pencil</option>
          </select>
          &nbsp;
          <label>
            choose y
            <input type="file" ref={this.y} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

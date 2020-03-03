import React from "react";

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      pages: "",
      read: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    this.props.onSubmit(
      this.state.title,
      this.state.author,
      this.state.pages,
      this.state.read
    );

    // clear form
    this.setState({
      title: "",
      author: "",
      pages: "",
      read: false,
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form className="book-form" onSubmit={this.handleSubmit}>
          <h2 className="form-title">New Book</h2>
          <ul className="field-list">
            <li>
              <label htmlFor="title">Title *</label>
              <input type="text" id="title" name="title" 
                value={this.state.title} onChange={this.handleInputChange} />
            </li>
            <li>
              <label htmlFor="author">Author *</label>
              <input type="text" id="author" name="author" 
                value={this.state.author} onChange={this.handleInputChange} />
            </li>
            <li>
              <label htmlFor="pages">Number of Pages</label>
              <input type="number" id="pages" name="pages" 
                value={this.state.pages} onChange={this.handleInputChange} />
            </li>
            <li>
              <label htmlFor="read">Have you read this book?</label>
              <input type="checkbox" id="read" name="read"
                checked={this.state.read} onChange={this.handleInputChange} />
            </li>
          </ul>
          <button className="form-close-button"
                  onClick={this.props.handleClose}>X</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BookForm;

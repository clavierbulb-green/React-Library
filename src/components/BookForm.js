import React from "react";

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      pages: 0,
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
      pages: 0,
      read: false,
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form className="book-form" onSubmit={this.handleSubmit}>
          <h2 className="book-form__title">New Book</h2>
          <ul className="book-form__field-list">
            <li className="field-item">
              <label htmlFor="title">Title</label>
              <input className="field-item__input" 
                     required type="text" id="title" name="title" 
                value={this.state.title} onChange={this.handleInputChange} />
            </li>
            <li className="field-item">
              <label htmlFor="author">Author</label>
              <input className="field-item__input"
                     required type="text" id="author" name="author" 
                value={this.state.author} onChange={this.handleInputChange} />
            </li>
            <li className="field-item">
              <label htmlFor="pages">Number of Pages</label>
              <input className="field-item__input"
                     required min="0" type="number" id="pages" name="pages" 
                value={this.state.pages} onChange={this.handleInputChange} />
            </li>
            <li className="field-item">
              <label htmlFor="read">Have you read this book?</label>
              <input className="field-item__input-checkbox"
                     type="checkbox" id="read" name="read"
                checked={this.state.read} onChange={this.handleInputChange} />
            </li>
          </ul>
          <button className="book-form__close-button"
                  onClick={this.props.handleClose}>X</button>
          <button className="book-form__submit-button" 
                  type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BookForm;

import React from "react";
import store from "../store/store";
import { connect } from "react-redux";
import { createContact, deleteContact } from "../actions/actions";
import "../styles.css";

class Main extends React.Component {
  state = {
    contactName: "",
  };

  handleSubmit = (e) => {
    // console.log(e);

    e.preventDefault();
    console.log(this.state.contactName);
    if (this.state.contactName) {
      store.dispatch(createContact(this.state.contactName));
      this.setState({ contactName: "" });
    }
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      contactName: e.target.value,
    });
  };

  handleDelete = (i) => {
    console.log("delete=", i);
    store.dispatch(deleteContact(i));
  };

  renderList(contacts) {
    return (
      <ul>
        {contacts.map((contact, i) => {
          return (
            <div key={i}>
              <li className="li-contact" style={{ display: "inline-block" }}>
                {contact}
              </li>
              <button
                className="btn btn-delete"
                onClick={() => this.handleDelete(i)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {console.log("props.contacts=", this.props.contacts)}
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              value={this.state.contactName}
              onChange={this.handleChange}
            />
            <input className="btn btn-submit" type="submit" value="Add" />
          </form>
        </div>
        <hr></hr>
        <div className="contacts">
          <h3 style={{ textAlign: "center" }}>Contacts</h3>
          <div className="underline"></div>
          {/* <div> */}

          {this.renderList(this.props.contacts)}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(Main);

import React, { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    accept: false,
    message: "",

    errors: {
      firstname: false,
      lastname: false,
      email: false,
      accept: false,
    },
  };

  messages = {
    firstname_incorrect: "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    lastname_incorrect: "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w emailu",
    accept_incorrect: "Nie potwierdzona zgoda",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "email") {
      const value = e.target.value;

      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;

      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();

    if (validation.correct) {
      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        accept: false,
        message: "Formularz został wysłany",

        errors: {
          firstname: false,
          lastname: false,
          email: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          firstname: !validation.firstname,
          lastname: !validation.lastname,
          email: !validation.email,
          accept: !validation.accept,
        },
      });
    }
  };

  formValidation = () => {
    let firstname = false;
    let lastname = false;
    let email = false;
    let accept = false;
    let correct = false;

    if (this.state.firstname.length > 10 && this.state.firstname.indexOf(" ") === -1) {
      firstname = true;
    }
    if (this.state.lastname.length > 10 && this.state.lastname.indexOf(" ") === -1) {
      lastname = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (firstname && lastname && email && accept) {
      correct = true;
    }

    return {
      firstname,
      lastname,
      email,
      accept,
      correct,
    };
  };

  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(() => {
        this.setState({
          message: "",
        });
      }, 3000);
    }
  }

  render() {
    return (
      <section className="form">
        <form onSubmit={this.handleSubmit} noValidate>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          {this.state.errors.firstname && <span>{this.messages.firstname_incorrect}</span>}
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          {this.state.errors.lastname && <span>{this.messages.lastname_incorrect}</span>}
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            Wyrażam zgodę
            {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
          </label>
          <button>Zapisz się</button>
          {this.state.message && <h3>{this.state.message}</h3>}
        </form>
      </section>
    );
  }
}

export default Form;

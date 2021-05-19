import React, { Component } from "react";
import Axios from "axios";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    accept: false,
    confirmation: "",
    confirmationError: false,

    errors: {
      firstname: false,
      lastname: false,
      email: false,
      message: false,
      accept: false,
    },
  };

  errorMessages = {
    firstname_incorrect: "Pole wymagane",
    lastname_incorrect: "Pole wymagane",
    email_incorrect: "Błędny adres e-mail",
    message_incorrect: "Pole wymagane",
    accept_incorrect: "Zgoda wymagana",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "email" || type === "textarea") {
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

  formValidation = () => {
    let firstname = false;
    let lastname = false;
    let email = false;
    let message = false;
    let accept = false;
    let correct = false;

    if (this.state.firstname.length > 0) {
      firstname = true;
    }
    if (this.state.lastname.length > 0) {
      lastname = true;
    }
    if (
      this.state.email.indexOf("@") !== -1 &&
      this.state.email.indexOf(".") < this.state.email.length - 1
    ) {
      email = true;
    }
    if (this.state.message.length > 0) {
      message = true;
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
      message,
      accept,
      correct,
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();
    const saveFormURL = "http://chojnacki.eu/form.php";
    const that = this;

    if (validation.correct) {
      Axios.post(saveFormURL, {
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        email: this.state.email,
        message: this.state.message,
        accept: this.state.accept,
      })
        .then(function (response) {
          console.log(response);
          that.setState({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
            accept: false,
            confirmation: "Formularz został wysłany",
            confirmationError: false,
          });
        })
        .catch(function (error) {
          console.log(error);
          that.setState({
            confirmation: "Wysyłanie nie powiodło się",
            confirmationError: true,
          });
        });

      this.setState({
        errors: {
          firstname: false,
          lastname: false,
          email: false,
          message: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          firstname: !validation.firstname,
          lastname: !validation.lastname,
          email: !validation.email,
          message: !validation.message,
          accept: !validation.accept,
        },
      });
    }
  };

  componentDidUpdate() {
    if (this.state.confirmation !== "") {
      setTimeout(() => {
        this.setState({
          confirmation: "",
        });
      }, 3000);
    }
  }

  render() {
    const { header1, header2, placeholder1, placeholder2, placeholder3, placeholder4, rodo, btn } =
      this.props;

    return (
      <section className="form">
        <div className="form__container container">
          <form onSubmit={this.handleSubmit} noValidate>
            {header1 ? <h2 className="form__header">{header1}</h2> : null}
            {header2 ? <h3 className="form__subheader">{header2}</h3> : null}
            <div className="form__name-box">
              <div className="form__input-box form__input-box--name">
                <input
                  className={`form__input ${
                    this.state.firstname ? "form__input--with-content" : ""
                  }`}
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                />
                <div className="form__placeholder">{placeholder1}</div>
                {this.state.errors.firstname && (
                  <div className="form__incorrect">{this.errorMessages.firstname_incorrect}</div>
                )}
              </div>
              <div className="form__input-box form__input-box--name">
                <input
                  className={`form__input ${
                    this.state.lastname ? "form__input--with-content" : ""
                  }`}
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
                <div className="form__placeholder">{placeholder2}</div>
                {this.state.errors.lastname && (
                  <div className="form__incorrect">{this.errorMessages.lastname_incorrect}</div>
                )}
              </div>
            </div>
            <div className="form__input-box">
              <input
                className={`form__input ${this.state.email ? "form__input--with-content" : ""}`}
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div className="form__placeholder">{placeholder3}</div>
              {this.state.errors.email && (
                <div className="form__incorrect">{this.errorMessages.email_incorrect}</div>
              )}
            </div>
            <div className="form__input-box form__input-box--message">
              <textarea
                className={`form__input form__input--message ${
                  this.state.message ? "form__input--with-content" : ""
                }`}
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              ></textarea>
              <div className="form__placeholder">{placeholder4}</div>
              {this.state.errors.message && (
                <div className="form__incorrect">{this.errorMessages.message_incorrect}</div>
              )}
            </div>
            <label className="form__checkbox-label" htmlFor="accept">
              <input
                className="form__checkbox"
                type="checkbox"
                id="accept"
                name="accept"
                checked={this.state.accept}
                onChange={this.handleChange}
              />
              <div className="form__custom-checkbox"></div>
              {rodo}
              {this.state.errors.accept && (
                <div className="form__incorrect form__incorrect--checkbox">
                  {this.errorMessages.accept_incorrect}
                </div>
              )}
            </label>
            <button className="form__btn btn btn--blue">{btn}</button>
            {this.state.confirmation && (
              <p
                className={
                  this.state.confirmationError
                    ? "form__confirmation form__confirmation--error"
                    : "form__confirmation"
                }
              >
                {this.state.confirmation}
              </p>
            )}
          </form>
        </div>
      </section>
    );
  }
}

export default Form;

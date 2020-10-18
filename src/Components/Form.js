import React, { useState } from "react";
import Ship from "../Components/Ship";
import Island1 from "../assets/images/island.svg";
import Island2 from "../assets/images/island2.svg";
import Island3 from "../assets/images/island3.svg";
import ticket1 from "../assets/images/first-class.png";
import ticket2 from "../assets/images/second-class.png";
import ticket3 from "../assets/images/third-class.png";
import Modal from "./Modal";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    gender: "",
    class: "",
    embarqued: "",
    companions: "",
    showModal: false,
  });

  const companionNumber = 50;
  const persons = [];
  for (let i = 0; i <= companionNumber; i++) {
    persons.push(i);
  }
  const price =
    values.class !== "" && values.companions !== 0 && values.companions !== ""
      ? parseInt(512 / values.class) * values.companions
      : "0";
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setValues((values) => ({
      ...values,
      ["showModal"]: true,
    }));
  };
  const handleClose = (evt) => {
    evt.preventDefault();
    setValues((values) => ({
      ...values,
      ["showModal"]: false,
    }));
  };
  return (
    <section className="Form" id="Form">
      <Modal show={values.showModal} handleClose={handleClose}>
        <h2>
          {values.name}
          <span>¡Felicidades!</span>
        </h2>
        <p>Viajaste en el Titanic y sobreviviste</p>
      </Modal>
      <h2>¡Viajemos!</h2>
      <form onSubmit={handleSubmit}>
        <div id="embarqued">
          <h3>Puerto de partida:</h3>
          <label>
            <span>Cherbourg</span>
            <input
              type="radio"
              checked={values.embarqued === "c"}
              value="c"
              name="embarqued"
              onChange={(e) => handleOnChange(e)}
            />
            <img src={Island1} alt="Puerto Cherbourg" />
          </label>
          <label>
            <span>Queenstown</span>
            <input
              type="radio"
              checked={values.embarqued === "q"}
              value="q"
              name="embarqued"
              onChange={(e) => handleOnChange(e)}
            />
            <img src={Island3} alt="Puerto Queenstown" />
          </label>
          <label>
            <span>Southampton</span>
            <input
              type="radio"
              checked={values.embarqued === "s"}
              value="s"
              min="0"
              max="20"
              name="embarqued"
              onChange={(e) => handleOnChange(e)}
            />
            <img src={Island2} alt="Puerto Southampton" />
          </label>
        </div>
        <div className="tickets">
          <h3>Selecciona tu boleto:</h3>
          <Ship key="boat" {...values} />
          <div id="class">
            <label>
              <span>Primera</span>
              <input
                type="radio"
                checked={values.class === "1"}
                value="1"
                name="class"
                onChange={(e) => handleOnChange(e)}
              />
              <img src={ticket1} alt="Ticket Primera Clase" />
            </label>
            <label>
              <span>Segunda</span>
              <input
                type="radio"
                checked={values.class === "2"}
                value="2"
                name="class"
                onChange={(e) => handleOnChange(e)}
              />
              <img src={ticket2} alt="Ticket Segunda Clase" />
            </label>
            <label>
              <span>Tercera</span>
              <input
                type="radio"
                checked={values.class === "3"}
                value="3"
                name="class"
                onChange={(e) => handleOnChange(e)}
              />
              <img src={ticket3} alt="Ticket Tercera Clase" />
            </label>
          </div>
        </div>
        <div id="checkout">
          <div className="passenger">
            <div className="passenger-data">
              <h3>Datos del pasajero: </h3>
              <div className="general-data">
                <label>
                  Nombre:
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="false"
                    value={values.name}
                    onChange={(e) => handleOnChange(e)}
                  />
                </label>

                <label>
                  Edad
                  <input
                    id="age"
                    type="number"
                    name="age"
                    value={values.age}
                    onChange={(e) => handleOnChange(e)}
                  />
                </label>
                <div id="gender">
                  Género:
                  <label>
                    F
                    <input
                      type="radio"
                      checked={values.gender === "Female"}
                      value="Female"
                      name="gender"
                      onChange={(e) => handleOnChange(e)}
                    />
                  </label>
                  <label>
                    M
                    <input
                      type="radio"
                      checked={values.gender === "Male"}
                      value="Male"
                      name="gender"
                      onChange={(e) => handleOnChange(e)}
                    />
                  </label>
                </div>
              </div>
            </div>
            <label>
              ¿Cuántos boletos quieres?
              <select
                value={values.companions}
                name="companions"
                onChange={(e) => handleOnChange(e)}
              >
                {persons.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="price">
            <span>Total: ${price}</span>
            <input type="submit" value="¡Vámos ya!" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;

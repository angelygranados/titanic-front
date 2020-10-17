import React, { useState } from "react";
import Ship from "../Components/Ship";
import Island1 from "../assets/images/island.svg";
import Island2 from "../assets/images/island2.svg";
import Island3 from "../assets/images/island3.svg";
import ticket1 from "../assets/images/first-class.png";
import ticket2 from "../assets/images/second-class.png";
import ticket3 from "../assets/images/third-class.png";

const Form = () => {
  const [values, setValues] = useState({
    title: "",
    rate: "",
    name: "",
    age: "",
    gender: "",
    class: "",
    embarqued: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);
  };

  return (
    <section className="Form" id="Form">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <select
            id="title"
            value={values.title}
            name="title"
            onChange={(e) => handleOnChange(e)}
          >
            <option value=""></option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Don">Don</option>
            <option value="Dona">Dona</option>
            <option value="Sir">Sir</option>
            <option value="Lady">Lady</option>
            <option value="Master">Master</option>
            <option value="Major">Major</option>
            <option value="Capt">Capt</option>
            <option value="Dr">Dr</option>
            <option value="Rev">Rev</option>
            <option value="Countess">Countess</option>
            <option value="Col">Col</option>
            <option value="Jonkheer">Jonkheer</option>
          </select>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e) => handleOnChange(e)}
          />
        </label>
        <div className="traveler">
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
              Femenino
              <input
                type="radio"
                checked={values.gender === "Female"}
                value="Female"
                name="gender"
                onChange={(e) => handleOnChange(e)}
              />
            </label>
            <label>
              Masculino
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
        <label>
          Precio:
          <input
            name="rate"
            type="number"
            value={values.rate}
            onChange={(e) => handleOnChange(e)}
          />
        </label>
        <div className="tickets">
          <h3>Clase:</h3>
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
          <Ship key="boat" {...values} />
        </div>
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
              name="embarqued"
              onChange={(e) => handleOnChange(e)}
            />
            <img src={Island2} alt="Puerto Southampton" />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Form;

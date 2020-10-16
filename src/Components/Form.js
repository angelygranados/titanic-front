import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    title: "",
    rate: "",
    name: "",
    age: "",
    gender: "",
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
        <div className="form"></div>
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
          <label>
            Femenino:
            <input
              type="radio"
              checked={values.gender === "Female"}
              value="Female"
              name="gender"
              onChange={(e) => handleOnChange(e)}
            />
          </label>
          <label>
            Masculino:
            <input
              type="radio"
              checked={values.gender === "Male"}
              value="Male"
              name="gender"
              onChange={(e) => handleOnChange(e)}
            />
          </label>
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
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Form;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { login, verifyLogin } from "../redux/authSlice";
import { useState } from "react";

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const { isLoged, setIsLoged } = useSelector((state) => state.isLoged)
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Ingrese su username"),
    password: Yup.string().required("Ingrese su contraseña"),
  });

  const handleChange = (e) => {
    console.log({ ...form, [e.target.name]: e.target.value })
  };

  const sigIn = (e) => {
    e.preventDefault()
    if (dispatch(login(form))) {
      navigate('/profile ')
    } else {
      navigate('/')
    }
  }

  return (
    <div className="body1">
      <div className="login-form-container">
        {/* button return */}
        <Link to="/">
          <button className="btn-return-login">
            <i className="fa-solid fa-x mt-1"></i>
          </button>
        </Link>
        <h2 className="text-u">Login</h2>
        <Formik
          initialValues={form}
          validationSchema={validationSchema}
          onSubmit={sigIn}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field name="username">
                {({ field }) => (
                  <div className="input-with-icon">
                    <i className="fa-solid fa-address-card fs-4 m-2" />
                    <input
                      {...field}
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      placeholder="Ingrese un username"
                      value={form.username}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                value={form.username}
                name="username"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <Field name="password">
                {({ field }) => (
                  <div className="input-with-icon">
                    <i className="fa-solid fa-key fs-4 m-2" />
                    <input
                      {...field}
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Ingrese su contraseña"
                      value={form.password}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                value={form.password}
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <p>
              ¿Ya tienes una cuenta? Inicia sesión{" "}
              <Link to="/register" className="p">
                aquí
              </Link>

            </p>
            {/* <Link className="text-decoration-none" to="/profile">
              {" "} */}
            <button type="submit" className="btn-registro">
              Iniciar sesion
            </button>
            {/* </Link> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;

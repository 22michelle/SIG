import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { login, verifyLogin } from "../redux/authSlice";
import { useState } from "react";
import { useFormik } from "formik/dist";

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LoginValidSchema = Yup.object().shape({
    username: Yup.string().required("Ingrese su username"),
    password: Yup.string().required("Ingrese su contraseña"),
  })
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidSchema,
    onSubmit: async (values) => {
      try {
        let response = dispatch(login(values))
        
      } catch (error) {
        console.log(error.message)
      }
    }
  })

  return (
    <div className="body1">
      <div className="login-form-container">
        <Link to="/">
          <button className="btn-return-login">
            <i className="fa-solid fa-x mt-1"></i>
          </button>
        </Link>
        <h2 className="text-u">Login</h2>
        <Formik
          onSubmit={formik.handleSubmit}
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
                      value={formik.values.username}
                      onChange={formik.handleChange}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                value={formik.values.username}
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
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                value={formik.values.password}
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

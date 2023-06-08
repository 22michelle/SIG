import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {

  const { isLoged, setIsLoged } = useSelector((state) => state.isLoged)
  const form = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Ingrese su username"),
    password: Yup.string().required("Ingrese su contraseña"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

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
          onSubmit={handleSubmit}
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
                      id="username"
                      className="form-control"
                      placeholder="Ingrese un username"
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
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
                      id="password"
                      className="form-control"
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
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
              .
            </p>
            <Link className="text-decoration-none" to="/profile">
              {" "}
              <button type="submit" className="btn-registro">
                Iniciar sesion
              </button>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;

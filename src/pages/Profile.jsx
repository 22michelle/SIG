import "./StylesProfile.css";
import Logo from "../assets/bigtrade-logo-03.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="body">
      <div className="contentPadre">
        <div className="content">
          <ul>
            <h2>Datos de Usuario</h2>

            <li>
              Primer Nombre: <span className="data">{}</span>
            </li>
            <hr />
            <li>
              Primer Apellido: <span className="data">{}</span>
            </li>
            <hr />
            <li>
              Usuario: <span className="data">{}</span>
            </li>
            <hr />
            <li>
              Correo Electronico: <span className="data">{}</span>
            </li>
          </ul>
          <hr />
          <div className="col-4 m-3">
            <Link to="/">
              <button className="btn">Cerrar Sesión</button>
            </Link>{" "}
            <img className="Logo p-4 col-2" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

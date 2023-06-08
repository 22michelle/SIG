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
            <svg className="iconosProfile" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512"><path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z"/></svg>              
            Primer Nombre <span className="data">Juan Pablo</span>
            </li>
            <hr />
            <li>
            <svg className="iconosProfile" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z"/></svg>
              Primer Apellido <span className="data">{}</span>
            </li>
            <hr />
            <li>
            <svg className="iconosProfile" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
              Usuario <span className="data">{}</span>
            </li>
            <hr />
            <li>
            <svg className="iconosProfile" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
              Correo Electronico <span className="data">{}</span>
            </li>
            <hr />
          </ul>
          
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

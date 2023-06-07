
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contactanos</h3>

            <a
              href="tel:+57 321 850 6981
"
            >
              <i className="fa-solid fa-phone me-1"></i>Teléfono:+57 321 850 6981
            </a>
            <br />
            <a href="mailto:contacto@nftweekmedellin.com">
              <i className="fa-solid fa-envelope me-1 mt-3"></i>Email:
              contacto@nftweekmedellin.com
            </a>
          </div>
          <div className="col-md-6">
            <h3>Síguenos en redes sociales</h3>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.facebook.com/Mettariqueza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                  <span className="p-1">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mettariqueza/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="p-1">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCxM3d46FjNiE3Z_yZNHB1Mg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                  <span className="p-1">Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row1">
          <div className="col-md-12">
            <p className="text-center">&copy; {currentYear} Diseñado por SIG</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

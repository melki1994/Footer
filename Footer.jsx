import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div>
  <main>
    <div className="contact">
      <h2>A Propos De Nous</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id architecto exercitationem hic sunt
        soluta.
        Quidem dolores numquam suscipit facilis reiciendis libero cumque fuga, dolorem officia in
        consectetur.
        Numquam, asperiores obcaecati.</p>
      <div className="info">
        <button> <b> Plus d'informations</b>
          <p className="boton" />
        </button>
      </div>
    </div>
  </main>
  <footer>
    <div className="footer">
      <div className="sabonner">
        <h2> S'abonner!</h2>
        <input type="email" placeholder="Écrivez votre e-mail" required id="sabonner" />
        <label htmlFor="sabonner"> <button>S'abonner! <p /></button></label>
      </div>
      <div className="adresse">
        <h2> Adresse</h2>
        <p> <img src="img/marcador-de-posicion.svg" alt="Lieu" /> </p>
        <p> <img src="img/phone-call.svg" alt=" Numero de telephone" /> </p>
        <p> <img src="img/email.svg" alt="email" /> </p>
      </div>
    </div>
    <div className="droits">
      <p> <img src="img/derechos-de-autor.svg" alt /> 2021. Tous droits réservés</p>
      <div>
      </div>
      <div className="réseaux">
        <a href title="instagram"> <img src="img/instagram.svg" alt="instagram" /> </a>
        <a href> <img src="img/facebook.svg" alt="Facebook" /> </a>
        <a href> <img src="img/linkedin.svg" alt="Linkedin" /> </a>
        <a href> <img src="img/youtube.svg" alt="Youtube" /> </a>
      </div>
    </div>
  </footer>
</div>

    )
}

export default Footer






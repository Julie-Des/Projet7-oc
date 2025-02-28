import { useState } from "react"
import arrowIcon from "../assets/arrow-icon.png"

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="collapse">
        {/* Titre en <h2> - Pas cliquable */}
        <div className="collapse-header">
          <h2>{title}</h2> 
  
          {/* Image de la flèche qui gère l'ouverture au clic */}
          <img 
            src={arrowIcon} 
            alt="Flèche"
            className={`arrow ${isOpen ? "open" : ""}`} 
            onClick={() => setIsOpen(!isOpen)} // ✅ Seule la flèche est cliquable
          />
        </div>
  
        {/* Affichage conditionnel du contenu */}
        {isOpen && <div className="collapse-content">{children}</div>}
      </div>
    );
  }
  
  export default Collapse;
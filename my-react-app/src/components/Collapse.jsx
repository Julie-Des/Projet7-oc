import { useState } from "react"
import arrowIcon from "../assets/arrow-icon.png"

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="collapse">
        <div className="collapse-header">
          <h2>{title}</h2> 
          <img 
            src={arrowIcon} 
            alt="Flèche"
            className={`arrow ${isOpen ? "open" : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && <div className="collapse-content">{children}</div>}
      </div>
    );
  }
  
  export default Collapse;
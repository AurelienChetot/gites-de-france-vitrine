"use client";

export default function OptionButton({ setSelectedOptions }) {
  const handleOptionClick = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      //Bascule entre oui et non pour le click
      [option]: prevOptions[option] === "oui" ? "non" : "oui",
    }));
  };

  return (
    <div className="menu-option">
      <div className="item">
        <a href="#" className="link">
          <span>Plus de filtres</span>
          <svg viewBox="0 0 360 360" xmlSpace="preserve">
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </g>
          </svg>
        </a>
        <div className="submenu">
          <div className="submenu-item">
            <p className="submenu-link">
              Animaux Acceptés{" "}
              <input
                onClick={() => handleOptionClick("animaux_acceptes")}
                type="checkbox"
                className="checkbox"
              />
            </p>
          </div>
          <div className="submenu-item">
            <p className="submenu-link">
              Piscine{" "}
              <input
                onClick={() => handleOptionClick("piscine")}
                type="checkbox"
                className="checkbox"
              />
            </p>
          </div>
          <div className="submenu-item">
            <p className="submenu-link">
              Randonnée{" "}
              <input
                onClick={() => handleOptionClick("randonnee")}
                type="checkbox"
                className="checkbox"
              />
            </p>
          </div>
          <div className="submenu-item">
            <p className="submenu-link">
              Location de vélo{" "}
              <input
                onClick={() => handleOptionClick("location_velo")}
                type="checkbox"
                className="checkbox"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import './Textelements.css';

const Headertext = ({ teksti, size }) => {
    return (
        <div
            className="header-text"
            style={size ? { fontSize: `${size}px` } : {}}
        >
            {teksti}
        </div>
    );
};

const Bodytext = ({ teksti, size }) => {
    return (
        <div
            className="plain-text"
            style={size ? { fontSize: `${size}px` } : {}}
        >
            {teksti}
        </div>
    );
};

export { Bodytext, Headertext };

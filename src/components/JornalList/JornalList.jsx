import "./JornalList.css"

const JornalList = ({ children }) => {
    return (
        <div className="journal-list">
            {children}
        </div>
    );
};

export default JornalList;
import CardButton from "../CardButton/CardButton"
import "./JournalAddButton.css"

const JournalAddButton = ({ clearForm }) => {
    return (
        <CardButton className="journal-add" onClick={clearForm}>
            <img className="plus" src="/plus.svg" alt="" />
            Новое воспоминание
        </CardButton>
    );
};

export default JournalAddButton;
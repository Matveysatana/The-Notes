import CardButton from "../CardButton/CardButton"
import "./JournalAddButton.css"

const JournalAddButton = () => {
    return (
        <CardButton className="journal-add">
            <img className="plus" src="/plus.svg" alt="" />
            Новое воспоминание
        </CardButton>
    );
};

export default JournalAddButton;
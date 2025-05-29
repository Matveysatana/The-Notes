import Button from "../Button/Button";
import "./JournalForm.css"


const JournalForm = ({ onSubmit }) => {
    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        onSubmit(formProps)
    }

    return (
        <form className="journal-form" onSubmit={addJournalItem} >
            <input type="text" name="title" id="" />
            <input type="date" name="date" id="" />
            <input type="text" name="tag" />
            <textarea name="text" id=""></textarea>
            <Button text="Сохранить" onClick={() => { console.log("Нажали") }} />
        </form>
    );
};

export default JournalForm;
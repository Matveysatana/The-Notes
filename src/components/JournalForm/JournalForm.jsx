import { useState } from "react";
import Button from "../Button/Button";
import "./JournalForm.css"

const JournalForm = () => {
    const [value, setValue] = useState('')

    const inputChange = (event) => {
        setValue(event.target.value)
    }

    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        console.log(formProps)
    }

    return (
        <form className="journal-form" onSubmit={addJournalItem} >
            <input type="text" name="title" id="" />
            <input type="date" name="date" id="" />
            <input type="text" name="tag" value={value} onChange={inputChange} />
            <textarea name="post" id=""></textarea>
            <Button text="Сохранить" />
        </form>
    );
};

export default JournalForm;
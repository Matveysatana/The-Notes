import { useState } from "react";
import Button from "../Button/Button";
import "./JournalForm.css"


const JournalForm = ({ onSubmit }) => {

    const [formValid, setFormValid] = useState({
        title: true,
        post: true,
        date: true
    })

    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        let isFormvalid = true;
        if (!formProps.title?.trim().length) {
            setFormValid(state => ({ ...state, title: false }))
            isFormvalid = false
        } else {
            setFormValid(state => ({ ...state, title: true }))
        }
        if (!formProps.post?.trim().length) {
            setFormValid(state => ({ ...state, post: false }))
            isFormvalid = false
        } else {
            setFormValid(state => ({ ...state, post: true }))
        }
        if (!formProps.date) {
            setFormValid(state => ({ ...state, date: false }))
            isFormvalid = false
        } else {
            setFormValid(state => ({ ...state, date: true }))
        }
        if (!isFormvalid) {
            return
        }

        onSubmit(formProps)
    }

    return (
        <form className="journal-form" onSubmit={addJournalItem} >
            <input type="text" name="title" style={{ border: formValid.title ? undefined : '1px solid red' }} />
            <input type="date" name="date" style={{ border: formValid.date ? undefined : '1px solid red' }} />
            <input type="text" name="tag" />
            <textarea name="post" style={{ border: formValid.post ? undefined : '1px solid red' }}></textarea>
            <Button text="Сохранить" onClick={() => { console.log("Нажали") }} />
        </form>
    );
};

export default JournalForm;
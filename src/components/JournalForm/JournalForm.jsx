import { useState } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css"


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
        <form className={styles["journal-form"]} onSubmit={addJournalItem} >
            <input type="text" name="title" className={`${styles["input"]} ${formValid.title ? '' : styles['invalid']}`} />
            <input type="date" name="date" className={`${styles["input"]} ${formValid.date ? '' : styles['invalid']}`} />
            <input type="text" name="tag" />
            <textarea name="post" className={`${styles["input"]} ${formValid.post ? '' : styles['invalid']}`}></textarea>
            <Button text="Сохранить" onClick={() => { console.log("Нажали") }} />
        </form>
    );
};

export default JournalForm;
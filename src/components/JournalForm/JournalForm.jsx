import { useEffect, useReducer, useRef, } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css"
import { formReducer, INITIAL_STATE } from "./JournalForm.state";
import { UserContext } from "../../context/user.context";



const JournalForm = ({ onSubmit }) => {

    const [fromState, despatchFn] = useReducer(formReducer, INITIAL_STATE)
    const { isValid, isFormReadyToSubmit, values } = fromState
    const titleRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.post:
                postRef.current.focus();
                break;
        }
    }

    useEffect(() => {
        let timerId;
        if (!isValid.title || !isValid.post || !isValid.date) {
            focusError(isValid)
            timerId = setTimeout(() => {
                despatchFn({ type: "RESET_VALIDITY" })
            }, 2000)
        }

        return () => {
            clearTimeout(timerId)
        }
    }, [isValid])


    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values)
            despatchFn({ type: "CLEAR" })
        }
    }, [isFormReadyToSubmit, values, onSubmit])

    const onChange = (e) => {
        despatchFn({ type: "SET_VALUE", payload: { [e.target.name]: e.target.value } })
    }

    const addJournalItem = (e) => {
        e.preventDefault()
        despatchFn({ type: "SUBMIT" })
    }

    return (
        <UserContext.Consumer>
            {(context) => (
                <form className={styles["journal-form"]} onSubmit={addJournalItem} >
                    {context.userId}
                    <div>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={values.title}
                            onChange={onChange}
                            ref={titleRef}
                            className={`${styles["input-title"]} ${isValid.title ? '' : styles['invalid']}`}
                        />
                    </div>

                    <div className={styles['label-row']}>
                        <label htmlFor="date" className={styles['form-label']} >
                            <img src="/calendar.svg" alt="" />
                            <span>Дата</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={values.date}
                            onChange={onChange}
                            ref={dateRef}
                            className={`${styles["input"]} ${isValid.date ? '' : styles['invalid']}`}
                        />
                    </div>

                    <div className={styles['label-row']}>
                        <label htmlFor="tag" className={styles['form-label']} >
                            <img src="/folder.svg" alt="" />
                            <span>Метки</span>
                        </label>
                        <input
                            type="text"
                            name="tag"
                            id="tag"
                            onChange={onChange}
                            value={values.tag}
                            className={styles['input']}
                        />
                    </div>

                    <textarea
                        name="post"
                        onChange={onChange}
                        value={values.post}
                        ref={postRef}
                        className={`${styles["input"]} ${isValid.post ? '' : styles['invalid']}`}>
                    </textarea>

                    <Button text="Сохранить" />
                </form>
            )}

        </UserContext.Consumer>
    );
};

export default JournalForm;
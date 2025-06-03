import { useContext, useEffect, useReducer, useRef, } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css"
import { formReducer, INITIAL_STATE } from "./JournalForm.state";
import { UserContext } from "../../context/user.context";



const JournalForm = ({ onSubmit, data, onDelete }) => {

    const [fromState, despatchFn] = useReducer(formReducer, INITIAL_STATE)
    const { isValid, isFormReadyToSubmit, values } = fromState
    const titleRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();
    const { userId } = useContext(UserContext)

    useEffect(() => {
        if (!data) {
			despatchFn({ type: 'CLEAR' });
			despatchFn({ type: 'SET_VALUE', payload: { userId }});
		}
        despatchFn({ type: 'SET_VALUE', payload: { ...data } });
    }, [data]);

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

    const onChange = (e) => {
        despatchFn({ type: "SET_VALUE", payload: { [e.target.name]: e.target.value } })
    }

    const addJournalItem = (e) => {
        e.preventDefault()
        despatchFn({ type: "SUBMIT" })
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
            despatchFn({ type: 'SET_VALUE', payload: { userId } });
        }
    }, [isFormReadyToSubmit, values, onSubmit, userId])

    useEffect(() => {
        despatchFn({ type: "SET_VALUE", payload: { userId } })
    }, [userId])

    const deleteJournalItem = () => {
		onDelete(data.id);
		despatchFn({ type: 'CLEAR' });
		despatchFn({ type: 'SET_VALUE', payload: { userId }});
	};

    return (
        <form className={styles["journal-form"]} onSubmit={addJournalItem} >
            <div className={styles['label-row']}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={values.title}
                    onChange={onChange}
                    ref={titleRef}
                    className={`${styles["input-title"]} ${isValid.title ? '' : styles['invalid']}`}
                />
                {data?.id && <button className={styles['delete']} type="button" onClick={deleteJournalItem}>
                    <img src="/archive.svg" alt="" />
                </button>
                }
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
                    value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''}
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

            <Button>Сохранить воспоминание</Button>
        </form>
    );
};

export default JournalForm;
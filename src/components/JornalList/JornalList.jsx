import "./JornalList.css"
import CardButton from "../CardButton/CardButton";
import JournalItem from '../JournalItem/JournalItem'
import { useContext, useMemo } from "react";
import { UserContext } from "../../context/user.context";


const JornalList = ({ items, setItem }) => {
    const { userId } = useContext(UserContext)
    const sortItem = (a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1
        }
    }
    const filteredItems = useMemo(() => items
        .filter(el => el.userId === userId)
        .sort(sortItem), [items, userId])




    if (items.length === 0) {
        return <p>Записей нет, создайте первую запись</p>
    }



    return <> {
        filteredItems.map(el => (
            <CardButton key={el.id} onClick={() => setItem(el)}>
                <JournalItem
                    title={el.title}
                    post={el.post}
                    date={el.date}
                />
            </CardButton>
        ))
    }
    </>

};

export default JornalList;
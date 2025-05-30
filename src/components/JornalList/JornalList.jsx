import "./JornalList.css"
import CardButton from "../CardButton/CardButton";
import JournalItem from '../JournalItem/JournalItem'


const JornalList = ({ items }) => {
    if (items.length === 0) {
        return <p>Записей нет, создайте первую запись</p>
    }

    const sortItem = (a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1
        }
    }

    return <> {
        items.sort(sortItem).map(el => (
            <CardButton key={el.id}>
                <JournalItem
                    title={el.title}
                    text={el.post}
                    date={el.date}
                />
            </CardButton>
        ))
    }
    </>

};

export default JornalList;
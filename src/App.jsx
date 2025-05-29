import { useState } from 'react'
import './App.css'
import CardButton from './components/CardButton/CardButton'
import Header from './components/Header/Header'
import JornalList from './components/JornalList/JornalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import JournalItem from './components/JournalItem/JournalItem'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'


const INITIAL_DATA = [
  {
    id: 1,
    title: "Изучать реакт круто!",
    text: "Я начинал с самых ванильных...",
    date: new Date()
  },

  {
    id: 2,
    title: "Тренировка памяти",
    text: "Сегодня я должен запомнить...",
    date: new Date()
  },
]



function App() {
  const [items, setItems] = useState(INITIAL_DATA)

  const addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      title: item.title,
      text: item.text,
      date: new Date(item.date),
      id: Math.max([...oldItems.map(i => i.id)]) + 1
    }])
  }

  const sortItem = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1
    }
  }

  return (
    <div className='app'>

      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JornalList>
          {items.sort(sortItem).map(el => (
            <CardButton key={el.id}>
              <JournalItem
                title={el.title}
                text={el.text}
                date={el.date}
              />
            </CardButton>
          ))}
        </JornalList>
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>



    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import JornalList from './components/JornalList/JornalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'


function App() {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      title: item.title,
      post: item.post,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max([...oldItems.map(i => i.id)]) + 1 : 1
    }])
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    if (data) {
      setItems(data.map(item => ({
        ...item,
        date: new Date(item.date)
      })))
    }
  }, [])

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('data', JSON.stringify(items))
    }
  }, [items])

  return (
    <div className='app'>

      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JornalList items={items}>
        </JornalList>
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  )
}

export default App

import { useLocalStorage } from './hooks/use-localstorage.hook'
import './App.css'
import Header from './components/Header/Header'
import JornalList from './components/JornalList/JornalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import { UserContext } from './context/user.context'

function mapItems(items) {
  if (!items) {
    return []
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date)

  }))
}

function App() {
  const [items, setItems] = useLocalStorage("data", [])

  const addItem = (item) => {
    setItems(items => [...mapItems(items), {
      title: item.title,
      post: item.post,
      date: new Date(item.date),
      id: items.length > 0 ? Math.max([...items.map(i => i.id)]) + 1 : 1
    }])
  }


  return (
    <UserContext.Provider value={{ userId: 1 }}>
      <div className='app'>
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JornalList items={mapItems(items)}>
          </JornalList>
        </LeftPanel>

        <Body>
          <JournalForm onSubmit={addItem} />
        </Body>
      </div>
    </UserContext.Provider >
  )
}

export default App

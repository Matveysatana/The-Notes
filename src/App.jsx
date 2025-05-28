import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import Header from './components/Header/Header'
import JornalList from './components/JornalList/JornalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalItem from './components/JournalItem/JournalItem'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'


const data = [
  {
    title: "Изучать реакт круто!",
    text: "Я начинал с самых ванильных...",
    date: new Date()
  },

  {
    title: "Мой завтрак!",
    text: "хммм что же мне сегодня съесть?...",
    date: new Date()
  },
]


function App() {


  return (
    <div className='app'>

      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JornalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JornalList>
      </LeftPanel>

      <Body>
        body
      </Body>



    </div>
  )
}

export default App

import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournalItem'


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
    <>
      <h1 className='title'>Записная книжка</h1>
      <Button />

      <CardButton>
        Новое воспоминание +
      </CardButton>
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

    </>
  )
}

export default App

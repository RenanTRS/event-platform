import { gql, useQuery } from '@apollo/client'

//Esboço get
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`

interface Lesson {
  //temporário
  id: string
  title: string
}

const App = () => {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
  console.log(data)
  return (
    <>
      <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
      <ul>
        {data?.lessons.map((lesson, key) => {
          return (
            <li key={key} className="text-zinc-100">
              {lesson.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App

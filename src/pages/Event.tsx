import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Sidebar } from '../components/Sidebar'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const Event = () => {
  const { slug } = useParams<{ slug: string }>()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handlerMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header handlerMenu={handlerMenu} isMenuOpen={isMenuOpen} />

      <main className="flex flex-1 flex-col lg:flex-row">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}

        <Sidebar isMenuOpen={isMenuOpen} />
      </main>
    </div>
  )
}

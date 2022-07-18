import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Sidebar } from '../components/Sidebar'

export const Event = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  )
}

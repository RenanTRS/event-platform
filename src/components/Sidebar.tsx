import classNames from 'classnames'
import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

interface SidebarProps {
  isMenuOpen: boolean
}
export const Sidebar = ({ isMenuOpen }: SidebarProps) => {
  const { data } = useGetLessonsQuery()

  return (
    <aside
      className={classNames(
        'overflow-hidden right-0 lg:right-auto transition-all duration-300 ease-linear lg:w-[348px] absolute lg:relative z-50 bg-gray-700 lg:p-6 border-l border-gray-600 min-h-[calc(100vh-4.7rem)] lg:min-h-0',
        {
          'w-full md:w-[50vw] p-6': isMenuOpen,
          'w-0 py-6': !isMenuOpen
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block w-screen">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8 w-[90vw] md:w-[45vw] lg:w-auto">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              type={lesson.lessonType}
              availableAt={new Date(lesson.availableAt)}
            />
          )
        })}
      </div>
    </aside>
  )
}

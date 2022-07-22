import { List, X } from 'phosphor-react'
import { Logo } from './Logo'

interface HeaderProps {
  handlerMenu: () => void
  isMenuOpen: boolean
}

export const Header = ({ handlerMenu, isMenuOpen }: HeaderProps) => {
  return (
    <header className="w-full py-5 px-6 lg:px-auto flex items-center justify-between gap-3 lg:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />

      <button onClick={handlerMenu} className="flex gap-2 lg:hidden">
        Aulas
        {isMenuOpen ? (
          <X size={22} weight="bold" className="text-blue-500" />
        ) : (
          <List size={22} weight="bold" className="text-blue-500" />
        )}
      </button>
    </header>
  )
}

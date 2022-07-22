import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreateSubscriberMutation } from '../graphql/generated'
import mockupImg from '../assets/code-mockup.png'
import logoImg from '../assets/logo.svg'

export const Subscriber = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault()

    await createSubscriber({
      //valores passados para a api
      variables: {
        name,
        email
      }
    })

    navigate('/event') //muda o endereço da página
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat p-4 lg:p-auto flex flex-col items-center">
      <div className="w-full lg:max-w-[68.75rem] flex flex-col lg:flex-row items-center justify-between mt-20 mx-auto">
        <div className="px-6 text-center lg:text-start lg:px-auto lg:max-w-[40rem]">
          <img src={logoImg} alt="" className="mx-auto lg:mx-0" />

          <h1 className="mt-8 text-[30px] lg:text-[2.5rem] leading-tight">
            Construra uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 py-6 lg:py-auto text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block text-center lg:text-start">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14 "
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 "
              type="email"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={mockupImg} className="mt-10" alt="" />
    </div>
  )
}

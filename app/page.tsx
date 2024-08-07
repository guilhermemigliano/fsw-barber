import { SearchIcon } from 'lucide-react'
import Header from './_components/header'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import Image from 'next/image'
import { Card, CardContent } from './_components/ui/card'
import { db } from './_lib/prisma'
import BarbershopItem from './_components/barbershop-item'
import { quickSearchOptions } from './_constants/search'
import BookingItem from './_components/booking-item'

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Guilherme!</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RÁPIDA */}

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map(option => (
            <Button key={option.title} className="gap-2" variant="secondary">
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        {/* AGENDAMENTO */}
        <BookingItem />

        <h2 className="uppercase text-gray-400 text-xs font-bold mt-6 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="uppercase text-gray-400 text-xs font-bold mt-6 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

import Header from './_components/header'
import { Button } from './_components/ui/button'
import Image from 'next/image'
import { db } from './_lib/prisma'
import BarbershopItem from './_components/barbershop-item'
import { quickSearchOptions } from './_constants/search'
import BookingItem from './_components/booking-item'
import Search from './_components/search'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from './_lib/auth'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { getConfirmedBookings } from './_data/get-confirmed-bookings'

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })

  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : 'Bem vindo'}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), 'EEEE, dd', { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), 'MMMM', { locale: ptBR })}
          </span>
        </p>

        {/* BUSCA */}
        <div className="mt-6">
          <Search />
        </div>

        {/* BUSCA RÁPIDA */}

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map(option => (
            <Button
              key={option.title}
              className="gap-2"
              variant="secondary"
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
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
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="uppercase text-gray-400 text-xs font-bold mt-6 mb-3">
              Agendamentos
            </h2>
            <div className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map(booking => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

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

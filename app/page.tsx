import { SearchIcon } from 'lucide-react'
import Header from './_components/header'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import Image from 'next/image'
import { Card, CardContent } from './_components/ui/card'
import { Badge } from './_components/ui/badge'
import { Avatar, AvatarImage } from './_components/ui/avatar'
import { db } from './_lib/prisma'
import BarbershopItem from './_components/barbershop-item'

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
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" alt="" width={16} height={16} />
            Cabelo
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" alt="" width={16} height={16} />
            Barba
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/acabamento.svg" alt="" width={16} height={16} />
            Acabamento
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/sobrancelha.svg" alt="" width={16} height={16} />
            Sobrancelha
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/acabamento.svg" alt="" width={16} height={16} />
            Acabamento
          </Button>
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
        <h2 className="uppercase text-gray-400 text-xs font-bold mt-6 mb-3">
          Agendamentos
        </h2>
        <Card className="">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/44805868?v=4" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

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
      <footer>
        <Card className="">
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home

import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem

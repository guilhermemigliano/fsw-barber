import { CalendarIcon, HomeIcon, LogOutIcon } from 'lucide-react'
import { Button } from './ui/button'
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import { Avatar, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import { quickSearchOptions } from '../_constants/search'
import Image from 'next/image'

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="p-5 border-b border-solid flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/44805868?v=4" />
        </Avatar>

        <div className="">
          <p className="font-bold">Guilherme Migliano</p>
          <p className="text-xs">guilherme@email.com.br</p>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-2 border-b border-solid">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="p-5 flex flex-col gap-2 border-b border-solid">
        {quickSearchOptions.map(option => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant={'ghost'}
          >
            <Image
              src={option.imageUrl}
              width={18}
              height={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="p-5 flex flex-col gap-2 border-b border-solid">
        <Button className="justify-start gap-2" variant={'ghost'}>
          <LogOutIcon size={18} />
          Sair da coonta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet

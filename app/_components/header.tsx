import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetTrigger } from './ui/sheet'
import { quickSearchOptions } from '../_constants/search'
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import SidebarSheet from './sidebar-sheet'

const Header = () => {
  return (
    <Card>
      <CardContent className="justify-between items-center flex flex-row p-5">
        <Link href={'/'}>
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header

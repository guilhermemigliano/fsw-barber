'use client'

import { SmartphoneIcon } from 'lucide-react'
import { Button } from './ui/button'
import { toast } from 'sonner'

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    console.log(phone)
    navigator.clipboard.writeText(phone)
    toast.success('Telefone copiado com sucesso!')
  }

  return (
    <div key={phone} className="flex justify-between">
      {/* ESQUERDA */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      {/* DIREITA */}

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem

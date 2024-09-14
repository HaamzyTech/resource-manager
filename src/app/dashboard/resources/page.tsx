import React from 'react'
import AddResourceButton from './_components/add-resource-button'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FilterIcon } from 'lucide-react'
import ResourceList from './_components/resource-list'
import { getMeasures } from '@/db/resource/queries'

type Props = {}

const ProductPage:React.FC<Props> = async({}) => {

  const measure = await getMeasures();

  return (
    <div className="flex flex-col space-y-6 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-bold text-4xl">Resources</h2>
        <AddResourceButton />
      </div>

      <div className="flex items-center justify-between w-full">
        <Input placeholder="search" />
        <Button variant="link">
          <FilterIcon className="w-4 h-4" /> Filter
        </Button>
      </div>

      <div>
        <ResourceList measure={measure ?? []} />
      </div>
    </div>
  )
}

export default ProductPage
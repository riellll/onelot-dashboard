'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useRouter } from "next/navigation"
type Props = {
    list: string | undefined
  }
const FilterButton = ({list}: Props) => {
    const router = useRouter();
    // const query = list ? `?list=${list}&filter=${str}`
  return (
<Select onValueChange={(str) => router.push(list ? `?list=${list}&filter=${str}` :`?filter=${str}`)}>
  <SelectTrigger className="w-[100px]">
    <SelectValue placeholder="Filter" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="vehicles">Vehicles</SelectItem>
    <SelectItem value="car-loan">Car Loan</SelectItem>
  </SelectContent>
</Select>

  )
}

export default FilterButton
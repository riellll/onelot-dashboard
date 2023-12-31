import { carData,postData } from "."
type Props = {
    filter: string | undefined;
    search: string | undefined;
    page: string | undefined;
  }
  
export const getCarData = ({filter, search, page}: Props) => {
    const category = filter === 'car-loan' ? 'Car Loan' : "Cars & Truck";
    const startIndex = (Number(page) - 1 || 0) * 8;
    const endIndex = startIndex + 8;
    const totalItem = carData.filter(item => item.category === category).length
    const totalPage = Math.ceil(carData.filter(item => item.category === category).length / 8)
    const carsData = carData
    .filter(item => {
      if(search === ''){
          return item
        }else if(item.licensePlate.toLowerCase().includes(search || '') ||
        item.companyName.toLowerCase().includes(search || '') ||
        item.carDetails.toLowerCase().includes(search || '')){
          return item
        }
    })
    .filter(item => item.category === category)
    .slice(startIndex, endIndex)

    return {carsData,totalItem,totalPage}
}

export const getPostData = ({page}:{page: string | undefined}) => {

  const startIndex = (Number(page) - 1 || 0) * 6;
  const endIndex = startIndex + 6;
  const totalItem = postData.length
  const totalPage = Math.ceil(postData.length / 6)
  const postsData = postData.slice(startIndex, endIndex)

  return {postsData,totalItem,totalPage}
}
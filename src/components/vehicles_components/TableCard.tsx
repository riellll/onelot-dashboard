
interface CarData {
    licensePlate: string;
    companyName: string;
    category: string;
    carDetails: string;
    date: string;
    model: string;
    mileage: number;
    buyingPrice: number;
    imageUrl: string;
  }
  
  // Example of using the interface with a component
  interface CarProps {
    carData: CarData[];
  }

const TableCard: React.FC<CarProps> = ({ carData }) => {
   
  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    LICENSE PLATE
                </th>
                <th scope="col" className="px-6 py-3">
                    MAKE
                </th>
                <th scope="col" className="px-6 py-3">
                    CATEGORY
                </th>
                <th scope="col" className="px-6 py-3">
                    MODEL
                </th>
                <th scope="col" className="px-6 py-3">
                    MILEAGE
                </th>
                <th scope="col" className="px-6 py-3">
                    BUYING PRICE
                </th>
                <th scope="col" className="px-6 py-3">
                    DATE ADDED
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {carData.map(item => (
            <tr key={item.licensePlate} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.licensePlate}
                </th>
                <td className="px-6 py-4">
                    {item.companyName}
                </td>
                <td className="px-6 py-4">
                    {item.category}
                </td>
                <td className="px-6 py-4">
                    {item.model}
                </td>
                <td className="px-6 py-4">
                    {item.mileage}
                </td>
                <td className="px-6 py-4">
                    {`$ ${item.buyingPrice}`}
                </td>
                <td className="px-6 py-4">
                    {item.date}
                </td>
                <td className="flex items-center px-6 py-4">
                    {item.category === "Car Loan" ? (<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Choose plan</a>) : (
                    <>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                    </>
                    )}
                </td>
            </tr>
                ))}
        </tbody>
    </table>
</div>

  )
}

export default TableCard
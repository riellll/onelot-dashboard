import { FaCheckCircle } from "react-icons/fa";
type Props = {
  licensePlate: string | undefined;
  companyName: string | undefined;
  category: string | undefined;
  carDetails: string | undefined;
  model: string | undefined;
  mileage: number | undefined;
  buyingPrice: number | undefined;
  imageUrl: string | undefined;
}
const Boxcard = ({
  licensePlate,
  companyName,
  category,
  carDetails,
  model,
  mileage,
  buyingPrice,
  imageUrl
}: Props) => {


  return (
    <div key={licensePlate} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
      <a href="#">
        <img className="rounded-lg w-full h-36" src={imageUrl} alt="" />
      </a>
      <div className="space-y-4 pt-3">
        <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
          {category}
        </span>
        <a href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {category === 'Car Loan' ? `PHP ${buyingPrice}` : `${licensePlate}`}
          </h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {category === 'Car Loan' ? `${carDetails}` : `${companyName}, ${model}`}
        </p>
        {category === 'Car Loan' && (
        <>
        <div className="space-y-2 text-sm text-gray-400">
          <h1 className="flex items-center gap-2"><span className="text-cyan-500"><FaCheckCircle /></span>{'1.5%/month Interest'}</h1>
          <h1 className="flex items-center gap-2"><span className="text-cyan-500"><FaCheckCircle /></span>{'60 Days Financing Period'}</h1>
          <h1 className="flex items-center gap-2"><span className="text-cyan-500"><FaCheckCircle /></span>{'70% Financing for vehicle purchase'}</h1>
        </div>
        <button type="button" className="text-white w-full items-center bg-violet-700 hover:bg-violet-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-violet-600 dark:hover:bg-violet-700">
        Choose plan
        </button>
        </>)}
      </div>
    </div>
  );
};

export default Boxcard;

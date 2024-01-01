import Link from "next/link";
import { BiLogoMicrosoft } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
type Props = {
    imageUrl: string;
    content: string;
  }

const PostCard = ({imageUrl, content}: Props) => {
  return (
    <div className="max-w-full min-h-full border border-gray-200 rounded-lg shadow bg-white">
  <div className="p-4 border-b">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Link href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className='text-2xl text-white rotate-45 bg-violet-600 p-2 rounded-full'><BiLogoMicrosoft /></span>
        </Link>
        <div className="ml-3">
          <p className="text-sm font-semibold">OneLot</p>
          <p className="text-xs text-gray-500">October 30</p>
        </div>
      </div>
      <Link href="#" className="text-xl hover:text-gray-400"><HiDotsHorizontal /></Link>
    </div>
    <div className="mt-3 text-sm">
      <p>{content}</p>
      <p className="text-blue-600">
        {"Sign-up OneLot'S dealer platform today. https://one-lot.com/"}
      </p>
    </div>
  </div>
  <div>
  <img
    src={imageUrl}
    alt="Lexus UX"
    className="w-full h-40 bg-cover"
    />
    </div>
  <div className="p-4">
    <div className="flex items-center space-x-4 justify-between">
      <div className="flex gap-3 items-center">
      <img src="/emoji/like.png" alt="emoji" className="w-5 h-5" />
      <img src="/emoji/love.png" alt="emoji" className="w-6 h-6 -ml-5" />
      <img src="/emoji/hug.jpg" alt="emoji" className="rounded-full w-5 h-5 -ml-5" />
      <p className="text-gray-500">177</p>
      </div>
      <div className='flex gap-3 text-gray-500'>
      <p>4 comments</p>
      <p>5 share</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default PostCard
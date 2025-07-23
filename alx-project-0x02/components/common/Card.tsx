import { CardProps } from "@/interfaces";


const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="group bg-white border rounded-xl transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-gray-600 hover:text-white">
            <div className="mb-4 self-center hover:text-white">
                <h2 className="text-3xl font-semibold mt-2 text-gray-800 text-center group-hover:underline group-hover:text-white">{title}</h2>
            </div>
            <p className="text-gray-600 text-center group-hover:text-white">{content}</p>
        </div>
    )
}
export default Card
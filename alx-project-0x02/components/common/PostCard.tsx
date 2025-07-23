import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) =>{
    return(
        <div className="border rounded-lg p-4 shadow-md bg-white">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-700 mt-2">{content}</p>
            <div className="text-sm text-gray-500 mt-4">{userId}</div>
        </div>
    )
}
export default PostCard
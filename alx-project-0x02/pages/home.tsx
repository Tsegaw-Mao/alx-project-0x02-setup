import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"
import { CardProps } from "@/interfaces";
import Card from "@/components/common/Card";
import { useState } from 'react'
import PostModal from "@/components/common/PostModal";
import { Button } from '@/components/ui/button'


const Home: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddPost = (post: Post) => {
        setPosts((prev) => [...prev, post])
    }

    return (
        <div className="flex flex-col h-screen ">
            <Header />
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <div className="flex flex-col justify-between">
                        <h1 className=" text-2xl font-semibold self-center">Home Page</h1>
                        <Button onClick={() => setIsModalOpen(true)} className="bg-blue-500 mt-5 hover:scale-110 hover:text-2xl" >Add Post</Button>
                    </div>
                    <PostModal
                        open={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handleAddPost}
                    />

                    <div className="space-y-4">
                        {posts.length === 0 ? (
                            <p className="text-gray-500">No posts yet.</p>
                        ) : (
                            posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white"
                                >
                                    <h2 className="text-lg font-semibold">{post.title}</h2>
                                    <p className="text-sm text-gray-700 mt-1">{post.content}</p>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-10 mx-30 mt-10">
                            <Card title="What is Lorem Ipsum?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                            <Card title="Why do we use it?" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
                            <Card title="Where does it come from?" content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.' />
                            <Card title="Where can I get some?" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." />
                        </div>
                    </div>
                </main>
            </div >
            <Footer />
        </div >
    )
}
export default Home;
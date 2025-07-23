import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"
const Posts: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <div className="flex justify-between">
                        <h1 className=" text-2xl font-semibold">Posts Page</h1>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default Posts;
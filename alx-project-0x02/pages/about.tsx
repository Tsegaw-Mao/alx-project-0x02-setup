import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"
import Button from '@/components/common/Button'

const About: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <div className="flex justify-between">
                        <h1 className=" text-2xl font-semibold">About Page</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Button size="small" shape="rounded-sm">
                            Small Rounded-sm
                        </Button>
                        <Button size="medium" shape="rounded-md">
                            Medium Rounded-md
                        </Button>
                        <Button size="large" shape="rounded-full">
                            Large Rounded-full
                        </Button>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default About;
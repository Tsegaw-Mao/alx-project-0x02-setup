// app/posts/page.tsx

import React from 'react'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}


const Posts: React.FC<PostProps[]> = ({ posts }) => {

    return (

        <div className="flex flex-col h-screen">

            <Header />
            <div className="font-sans grid grid-rows-[20px_1fr_20px] my-10 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
                    <div className="flex justify-between w-full">
                        <h1 className="text-2xl font-semibold">Posts Page</h1>
                    </div>
                    <div className="w-full grid gap-6">
                        {
                            posts.map((post) => (
                                <PostCard
                                key = {post.id}
                                title={post.title}
                                content={post.body}
                                userId={post.userId}
                                />
                            ))
                        }
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Posts

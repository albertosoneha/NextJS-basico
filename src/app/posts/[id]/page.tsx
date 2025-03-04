import { resolve } from "path";
import { PostProps } from "../page";
import { PostInfo } from "./components/post";
import { Suspense } from "react";

export default async function DetailPost({
    params
}: {
    params: Promise<{id: string }>
}) {

    const { id } = await params;

    await new Promise(resolve => setTimeout(resolve, 4000))
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Detalhes do post: {id}</h1>

         <Suspense fallback={<h1>Carregando...</h1>}>
            <PostInfo id={id}/>
         </Suspense>
        </div>
    )
}
import { ragChat } from "@/lib/rag-chat"

interface PageProps {
    params: {
        url: string | string[] | undefined 
    }
}

function refineUrl({ url }: { url: string[] }) {
    const decodedComponent = url.map((component) => decodeURIComponent(component));

    if (decodedComponent[decodedComponent.length - 1] === "") {
        decodedComponent.pop();
    }

    return decodedComponent.join("/")
}

const Page = async ({ params } : PageProps) => {
  const refinedUrl = refineUrl({ url: params.url as string[] })

  console.log(params)

  await ragChat.context.add({
    type: "html",
    source: refinedUrl
  })
  return (
    <div>Hello</div>
    
  )
}

export default Page
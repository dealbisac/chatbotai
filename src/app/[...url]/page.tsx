import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis";

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
   // Refine the URL
  const refinedUrl = refineUrl({ url: params.url as string[] })

  // Check if the provided URL is already indexed so that new vector db can be duplicated
  const isAlreadyIndexed = await redis.sismember("indexed-urls", refinedUrl);

  // Session ID
    const sessionId = "session-mock";
  
  if (!isAlreadyIndexed) {

    // perform ragChat
    await ragChat.context.add({
        type: "html",
        source: refinedUrl,
        config: { chunkOverlap:50, chunkSize:200 },
      })

    // Add the URL to the indexed-urls set
    await redis.sadd("indexed-urls", refinedUrl);
  }

  // console.log(params)

  return <ChatWrapper />
}

export default Page
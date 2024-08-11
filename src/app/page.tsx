import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Chatbot AI</h1>
      <p>Start conversation with any website by simply starting</p>
      <Image src="/logo.svg" alt="Chatbot AI" width={200} height={200} />
    </main>
  );
}

interface PageProps {
    params: {
        url: string | string[] | undefined 
    }
}
const Page = ({ params } : PageProps) => {
  console.log(params)
  return (
    <div>Hello</div>
    
  )
}

export default Page
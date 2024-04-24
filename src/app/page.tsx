import Blog from "@/components/Blog"

const Page = () => {

  return (
    <div className="w-screen h-screen overflow-x-hidden" style={{
      backgroundImage: "url('https://br.solomoto.com/news/assets/images/br/blog/solomoto_blog_para_seu_negocio.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Blog />
    </div>
  )
}

export default Page;
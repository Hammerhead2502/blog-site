export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/getPost")
  const data = await res.json()
  const paths = data.map((data) => {
    return {
        params: {
            blog: data.title
        }
    }
  })
    return {
      paths,
      fallback: false, 
    }
  }

  export async function getStaticProps(context) {
    const title = context.params.blog
    const res = await fetch(`http://localhost:3000/api/getBlog?title=${title}`)
    const data = await res.json()
    return {
      props: { data },
    }
  }

export default function Blog({data}){
    return <div className="blog"><h1>{data.title}</h1>
    <p>{data.message}</p>
    </div>
}
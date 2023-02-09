import Link from 'next/link'

export default function Home({data}) {
  return <div className='container'><h1 className='heading'>Here's what's new</h1>
  {data.map((data, index) => {
      return <div key={index} className="blog"><h1>{data.title}</h1>
      <p>{data.message.slice(0,100)} <Link  href={`/blog/${data.title}`}>Read more...</Link></p>
      </div>
  })}
  </div>
}

export async function getServerSideProps(){
  const res = await fetch("http://localhost:3000/api/getPost")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
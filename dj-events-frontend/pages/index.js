import Layout from "@/components/Layout"
import EventItem from "../components/EventItem"
import { API_URL } from "@/config/index"


export default function HomePage({events}) {
  return (
   <Layout>
     <h1>Upcoming Events</h1>
     {events.length === 0 && <h3>No events to show</h3>}

     {events.map((evt) => (
       <EventItem key={evt.id} evt={evt} />
     ))}
   </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()


  return {
    props: {events},
    revalidate: 1,
  }
}










/*
import Link from 'next/link'; //need this for quick routing
  -in return <Link href="/" />
*/
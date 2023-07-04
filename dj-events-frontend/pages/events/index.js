import Link from 'next/link'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'


export default function EventsPage({events}) {
  return (
   <Layout>
     <h1>Events</h1>
     {events.length === 0 && <h3>No events to show</h3>}

     {events.map((evt) => (
       <EventItem key={evt.id} evt={evt} />
     ))}

     {events.length > 0 && (
       <Link href='/event'>
         <a className='btn-secondary'>View All Events</a>
       </Link>
     )}
   </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()


  return {
    props: { events: events.slice(0, 3) }, //this will show 3 events
    revalidate: 1,
  }
}










/*
import Link from 'next/link'; //need this for quick routing
  -in return <Link href="/" />
*/


/*
even though the file name is index.js it will still go to /events
*/
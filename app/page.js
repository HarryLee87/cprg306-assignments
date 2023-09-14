import Image from 'next/image'
import MyComp from './mycomp'
import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <StudentInfo />
      <Link href="/week2">Week2</Link>
    </main>
  )
}

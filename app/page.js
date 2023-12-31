import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Week2</Link><br />
      <Link href="/week3">Week3</Link><br />
      <Link href="/week4">Week4</Link><br />
      <Link href="/week5">Week5</Link><br />
      <Link href="/week6">Week6</Link><br />
      <Link href="/week7">Week7</Link><br />
      <Link href="/week8">Week8</Link><br />
      <Link href="/week10">Week10</Link><br />
    </main>
  )
}

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className=''>
      <div className=''>PokeBook</div>
      <section>
        <NavBar />
      </section>
      <section>Landing Page</section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

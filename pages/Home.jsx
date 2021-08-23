const { NavLink } = ReactRouterDOM

export function Home() {
    return (
      <section className="home">
        <h1>Welcome to Raz's Book store</h1>
        <p>Build with react</p>
        <button><NavLink to ="/book" >See Books</NavLink></button>
      </section>
    )
  }
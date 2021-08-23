const { NavLink } = ReactRouterDOM

export function About() {
    return (
      <section className="about">
        <h1>About Raz's Book store</h1>
        <p>Build with react</p>
        <button><NavLink to ="/book" >See Books</NavLink></button>
      </section>
    )
  }
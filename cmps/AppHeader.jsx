const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

  render() {

    return (
        <div className="header">
            <h1><NavLink to ="/" ><h1>Book Store</h1></NavLink></h1>
            <nav>
                <NavLink activeClassName="my-active" exact to='/' >Home</NavLink>
                <NavLink to ="/book" >Books</NavLink>
                <NavLink to ="/about" >About</NavLink>
            </nav>
        </div>
    )
  }

}
export const AppHeader = withRouter(_AppHeader)
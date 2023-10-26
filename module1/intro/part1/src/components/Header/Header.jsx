import logo from '../../assets/Vinci.png'

const Header = (props) => {
    return(
      <h1>
        <img src={logo} alt="" />
        {props.course}
      </h1>
    )
}

export default Header
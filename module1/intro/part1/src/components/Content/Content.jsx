import Part from "components/Part/Part";

const Content = (props) => {
    return(
      <div>
        <Part part={props.part} exo={props.exo} />
      </div>
    )
  }

export default Content;  


export default function Child(props) {
    console.log(props);
    const { abc, roll } = props
    // props.abc
    // props.roll
    return (
        <>
        <div style={{width:"100%", padding:"20px", border:"2px solid #000", margin:"20px 0px"}}>
            {/* <h1>Child Component {props.abc} {props.roll}</h1> */}
            <h1>Child Component {abc} {roll}</h1>
        </div>
        </>
    )
}
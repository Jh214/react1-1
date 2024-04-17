function Welcome(props){
    return <h1>안녕, {props.name}</h1>;
}
export default Welcome;

function App(props){
    return (
        <div>
            <Welcome name ="Mike"/>
            <Welcome name = "Steve"/>
            <Welcome name = "Jane"/>
        </div>
    )
}
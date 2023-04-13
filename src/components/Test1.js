

export default function Test1(props){

    console.log("data is ",props);
      
    return(
      <div>
       <h1>Test1 component</h1>
        <h1>Data received from parent is:{props.userName}</h1>
      </div>
    );
}
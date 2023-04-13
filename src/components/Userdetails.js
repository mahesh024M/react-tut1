
export default function Userdetails(props){
   console.log(props);
    return (
        <div>
           <h3>{props.user.username}</h3>
           <h3>{props.user.salary}</h3>
           <h3>{props.user.age}</h3>
        </div>
    )

}
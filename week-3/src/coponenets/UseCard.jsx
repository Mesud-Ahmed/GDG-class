export default function UseCard({name,age, email, bgColor}){
    return (
        <>
        <ul className="card-container" style={{backgroundColor:`${bgColor}`}}>
            <li>{name}</li>
            <li>{age}</li>
            <li>{email}</li>
        </ul>

        </>
    )
}
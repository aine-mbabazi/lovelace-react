import './index.css'
const UserCard = ({image,fullName, id}) => {
    const imageStyle = {
        display:'flex',
        alignItems:'center',
        padding:'10px'
    }
    return(
        <div className="image">
            <img src={image} alt = {`${fullName} profile`}/>
            <h3>{fullName}</h3>
        </div>
    );
};
export default UserCard;

import '../App.css'

function Card({image}){
  const cardItem ={
    name : "camera",
    price :"100000",
  };

return(
  <div className="col3">
    <div className="card-item">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <h3>{cardItem.name}</h3>
      <p>Rs {cardItem.price}</p>
      <a href="javascript:void()">you can have it</a>
    </div>
  </div>
);
}
export default Card ;
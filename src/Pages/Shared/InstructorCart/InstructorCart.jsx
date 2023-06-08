

const InstructorCart = ({item}) => {
    const {name,taken_class,description,ratings,image,email} = item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Image" className="w-full h-80" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <small>{email}</small>
                <p>{description}</p>
                <p>{taken_class}</p>
                <p>{ratings}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCart;
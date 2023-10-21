

const CurtCard = ({ curt, curts, setCurts }) => {

    const { _id, name, brandName, description, photoURL, price, rating, type } = curt;


    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://tenth-assignment-server-mv319buzq-abirs-projects-823d9b34.vercel.app/curt/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Poof! Your  file has been deleted!", {
                                    icon: "success",
                                })
                                const remaining = curts.filter(item => item._id !== id)
                                setCurts(remaining)
                            }
                        })

                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div className="card mb-7 bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}!</h2>
                <p className="font-semibold">{brandName}</p>
                <p className="font-medium">
                    <span className="font-bold">Type : </span>{type}
                </p>
                <p className="font-medium">
                    <span className="font-bold">Price : </span>{price}
                </p>
                <p className="font-medium">
                    <span className="font-bold">Rating : </span>{rating}
                </p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CurtCard;
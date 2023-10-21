import swal from "sweetalert";

const AddProduct = () => {


    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const photoURL = form.photoURL.value;

        const newProduct = { name, rating, brandName, type, price, description, photoURL }

        console.log(newProduct);

        //send data to the server
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Good job!", "New Product Added Successfully.!", "success");
                }
            })
    } 

    return (
        <div className="bg-[#f4f3f0] p-24">
            <h1 className="font-extrabold text-4xl mb-7 text-center">Add A <span className="text-[#247CC6]">Product ..!</span> </h1>
            <form onSubmit={handleAddProduct}>
                {/* form row name & Type */}
                <div className="md:flex gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Type (e.g., mobile, computer)" name="type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row Brand Name & price */}
                <div className="md:flex gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select name="brandName" className="select select-bordered w-full">
                                <option value="IBM">IBM</option>
                                <option value="Samsung">Samsung</option>
                                <option value="NVIDIA">NVIDIA</option>
                                <option value="Microsoft">Microsoft</option>
                                <option value="Toshiba">Toshiba</option>
                                <option value="Fujitsu">Fujitsu</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row Rating and Description */}
                <div className="md:flex gap-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row Category and details */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="url" placeholder="Photo URL" name="photoURL" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-[#247CC6] mt-7 text-white" />
            </form>
        </div>
    );
};

export default AddProduct;

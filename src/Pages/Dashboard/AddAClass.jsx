import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";


const img_hosting_token = import.meta.env.VITE_image_upload_token;
const AddAClass = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log('image',imgResponse)
            })
        console.log(data)
    };
    console.log(errors);
    

    return (
        <>
            <div className="grid grid-cols-1 gap-4 ">
                <form onSubmit={handleSubmit(onSubmit)} className="class-form p-8 m-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md w-full">
                    <div className="flex gap-4">
                        <div className="mb-4 w-1/2">
                            <label htmlFor="className" className="block font-bold">Class Name:</label>
                            <input type="text" id="className" {...register("name", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="classImage" className="block font-bold">Class Image:</label>
                            <input type="file" id="classImage"
                                {...register("image", { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mb-4 w-1/2">
                            <label htmlFor="instructorName" className="block font-bold">Instructor Name:</label>
                            <input type="text"
                                defaultValue={user.displayName}
                                {...register("instructor", { required: true })}
                                id="instructorName" readOnly className="w-full px-4 py-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="instructorEmail" className="block font-bold">Instructor Email:</label>
                            <input type="text"
                                defaultValue={user.email}
                                {...register("email", { required: true })}
                                id="instructorEmail" readOnly className="w-full px-4 py-2 border border-gray-300 rounded" />
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="mb-4 col-span-2 w-1/2">
                            <label htmlFor="availableSeats" className="block font-bold">Available Seats:</label>
                            <input type="number" id="availableSeats"
                                {...register("availableSeats", { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="price" className="block font-bold">Price:</label>
                            <input type="number" id="price"
                                {...register("price", { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded" />
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="mb-4 w-1/2">
                            <label htmlFor="classDescription" className="block font-bold">Description:</label>
                            <input type="textarea" id="classDescription" {...register("description", { required: true })} className="w-full px-4 py-2 border  border-gray-300 rounded" />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="classCategory" className="block font-bold">Category:</label>
                            <input type="text" id="category"
                                {...register("category", { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <button type="submit" className=" w-full text-center col-span-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add A Class</button>
                </form>
            </div>



        </>
    );
};

export default AddAClass;
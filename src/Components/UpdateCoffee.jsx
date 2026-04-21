
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const {_id, name, quantity, price, taste, supplier,  details} = useLoaderData();
    const navigate = useNavigate();
    // console.log(_id);
const handleUpdateCoffee = (e) => {
  e.preventDefault();
  const form = e.target;

  const formData = new FormData(form);

  fetch(`http://localhost:3000/coffees/${_id}`, {
    method: "PUT",
    body: formData, // ⚠️ JSON না
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount) {
        Swal.fire("Updated!", "", "success").then(() => {
          navigate("/");
        });
      }
    });
};
    return (
        <div className='p-16'>
             <Link to="/" className="text-[#331A15] text-[30px] font-rancho flex items-center gap-2 mb-6">
        <FaArrowLeft /> Back to home
      </Link>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Update Existing Coffee Details</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Quantity Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Taste Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details Name" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="file" name='photo' className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;

// import React from 'react';
// import { useLoaderData, useNavigate } from 'react-router';
// import Swal from 'sweetalert2';

// const UpdateCoffee = () => {
//     const {_id, name, quantity, price, taste, supplier, photo, details} = useLoaderData();
//     const navigate = useNavigate();
//     // console.log(_id);
// const handleUpdateCoffee = (e) => {
//   e.preventDefault();
//   const form = e.target;

//   const name = form.name.value;
//   const quantity = form.quantity.value;
//   const supplier = form.supplier.value;
//   const taste = form.taste.value;
//   const price = form.price.value;
//   const details = form.details.value;

//   const file = form.photo.files[0];

//   // 👉 যদি নতুন image না দেয়
//   if (!file) {
//     const updatedCoffee = {
//       name,
//       quantity,
//       supplier,
//       taste,
//       price,
//       details,
//       photo, // old photo রাখবে
//     };

//     sendData(updatedCoffee);
//     return;
//   }

//   // 👉 নতুন image দিলে
//   const reader = new FileReader();

//   reader.onloadend = () => {
//     const updatedCoffee = {
//       name,
//       quantity,
//       supplier,
//       taste,
//       price,
//       details,
//       photo: reader.result,
//     };

//     sendData(updatedCoffee);
//   };

//   reader.readAsDataURL(file);
// };

// const sendData = (data) => {
//   fetch(`http://localhost:3000/coffees/${_id}`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.modifiedCount) {
//         Swal.fire({
//           icon: "success",
//           title: "Updated successfully",
//           timer: 1500,
//         }).then(() => {
//           navigate("/");
//         });
//       }
//     });
// };
//     return (
//         <div className='p-24'>
//             <div className='p-12 text-center space-y-4'>
//                 <h1 className="text-6xl">Update Coffee</h1>
//             </div>
//             <form onSubmit={handleUpdateCoffee}>
//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label">Name</label>
//                         <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Coffee Name" />
//                     </fieldset>
//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label">Quantity</label>
//                         <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Quantity Name" />
//                     </fieldset>
//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label">Supplier</label>
//                         <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Supplier Name" />
//                     </fieldset>
//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label">Taste</label>
//                         <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Taste Name" />
//                     </fieldset>
//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label">Price</label>
//                         <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price per Cup" />
//                     </fieldset>
//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label">Details</label>
//                         <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details Name" />
//                     </fieldset>
//                 </div>
//                 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
//                     <label className="label">Photo</label>
//                     <input type="file" name='photo' className="input w-full" placeholder="Photo URL" />
//                 </fieldset>

//                 <input type="submit" className='btn w-full' value="Update Coffee" />
//             </form>
//         </div>
//     );
// };

// export default UpdateCoffee;

import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";

const AddCoffee = () => {
  const navigate = useNavigate();
const handleAddCoffee = (e) => {
  e.preventDefault();
  const form = e.target;

  const formData = new FormData(form);

  fetch("http://localhost:3000/coffees", {
    method: "POST",
    body: formData, // ⚠️ no headers
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.insertedId) {
        Swal.fire("Success!", "Coffee added!", "success");
      }
    }).then(() => {
      navigate("/");
    });
};
  return (
    <div className="p-16">
      <Link to="/" className="text-[#331A15] text-[30px] font-rancho flex items-center gap-2 mb-6">
        <FaArrowLeft /> Back to home
      </Link>
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <button className="btn btn-secondary">Secondary</button>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="input w-full"
              placeholder="Quantity Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="Price per Cup"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Details Name"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label">Photo</label>
          <input
            type="file"
            name="photo"
            placeholder="Photo URL"
            className="file-input w-full mt-2"
            accept="image/*"
            required
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";

// const AddCoffee = () => {
//   const navigate = useNavigate();
//   const handleAddCoffee = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const name = form.name.value;
//     const quantity = form.quantity.value;
//     const supplier = form.supplier.value;
//     const taste = form.taste.value;
//     const price = form.price.value;
//     const details = form.details.value;

//     const file = form.photo.files[0];

//     const reader = new FileReader();

//     reader.onloadend = () => {
//       const photo = reader.result;

//       const newCoffee = {
//         name,
//         quantity,
//         supplier,
//         taste,
//         price,
//         details,
//         photo,
//       };

//       console.log(newCoffee);

//       fetch("http://localhost:3000/coffees", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newCoffee),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.insertedId) {
//             Swal.fire({
//               title: "Good job!",
//               text: "Coffee added successfully!",
//               icon: "success",
//             }).then(() => {
//               navigate("/");
//             });
//             form.reset();
//           }
//         });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
//   return (
//     <div className="p-24">
//       <div className="p-12 text-center space-y-4">
//         <h1 className="text-6xl">Add Coffee</h1>
//         <p>
//           It is a long established fact that a reader will be distraceted by the
//           readable content of a page when looking at its layout. The point of
//           using Lorem Ipsum is that it has a more-or-less normal distribution of
//           letters, as opposed to using Content here.
//         </p>
//         <button className="btn btn-secondary">Secondary</button>
//       </div>
//       <form onSubmit={handleAddCoffee}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//             <label className="label">Name</label>
//             <input
//               type="text"
//               name="name"
//               className="input w-full"
//               placeholder="Coffee Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//             <label className="label">Quantity</label>
//             <input
//               type="text"
//               name="quantity"
//               className="input w-full"
//               placeholder="Quantity Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//             <label className="label">Supplier</label>
//             <input
//               type="text"
//               name="supplier"
//               className="input w-full"
//               placeholder="Supplier Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//             <label className="label">Taste</label>
//             <input
//               type="text"
//               name="taste"
//               className="input w-full"
//               placeholder="Taste Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//             <label className="label">Price</label>
//             <input
//               type="text"
//               name="price"
//               className="input w-full"
//               placeholder="Price per Cup"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//             <label className="label">Details</label>
//             <input
//               type="text"
//               name="details"
//               className="input w-full"
//               placeholder="Details Name"
//             />
//           </fieldset>
//         </div>
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
//           <label className="label">Photo</label>
//           <input
//             type="file"
//             name="photo"
//             placeholder="Photo URL"
//             className="file-input w-full mt-2"
//             accept="image/*"
//             required
//           />
//         </fieldset>

//         <input type="submit" className="btn w-full" value="Add Coffee" />
//       </form>
//     </div>
//   );
// };

// export default AddCoffee;

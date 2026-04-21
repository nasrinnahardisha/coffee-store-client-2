import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, quantity, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#EA4744",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              // remove the coffee from the state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="flex items-center justify-between bg-[#F5F4F1] p-7 rounded-xl shadow-md  transition duration-300 ease-in-out
  hover:shadow-lg hover:-translate-y-1 group cursor-pointer">
      <div className="w-[185px]">
        <img
          src={`http://localhost:3000/Images/${photo}`}
          alt={name}
          className="w-[190px] h-[240px] object-contain"
        />
      </div>

      <div className="flex-1 ml-6">
        <p className="text-gray-600">
          <span className="font-semibold">Name :</span> {name}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Price :</span> {price}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Quantity :</span> {quantity}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Link to={`/coffee/${_id}`}>
          <button className="bg-[#d2b48c] px-3 py-2.5 rounded text-white">
            <FaEye className="text-md" />
          </button>
        </Link>

        <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-black px-3 py-2.5  rounded text-white">
            <MdEdit className="text-md" />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 px-3 py-2.5  rounded text-white"
        >
          <MdDelete className="text-md" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;

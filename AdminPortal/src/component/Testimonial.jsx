import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../Store/testimonialSlice";

const Testimonial = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector((state) => state.testimonials.testimonials);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", videosrc: "" });
  const [editingIndex, setEditingIndex] = useState(null);
  const [nameerror, setNameerror] = useState("");
  const [vidoerror, setVideoerror] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

   
      if(!formData.name){
        setNameerror("Please Enter Name:");
        isValid = false;

      }else{
        setNameerror("");
      }
      if(!formData.videosrc){
        setVideoerror("Please choose some video:");

      }else{
        setVideoerror("");
      }
   
      

    if (editingIndex !== null) {
      if(isValid){
      dispatch(
        updateTestimonial({ index: editingIndex, updatedTestimonial: formData })
      );
    }
    } else {
      if(isValid){
      dispatch(addTestimonial(formData));
      }
    }

    setFormData({ name: "", videosrc: "" });
     if(isValid){
    setIsFormVisible(false);
     }else{
      setIsFormVisible(true);
     }
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(testimonials[index]);
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  const handleDelete = (index) => {
    dispatch(deleteTestimonial(index));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Testimonials
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        onClick={() => setIsFormVisible(true)}
      >
        Add New Testimonial
      </button>

      {isFormVisible && (
        <form
          className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
            {nameerror && <p className="text-red-600 text-sm">{nameerror}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Video URL
            </label>
            <input
              type="url"
              name="videosrc"
              value={formData.videosrc}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
            {vidoerror && <p className="text-red-600">{vidoerror}</p>}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            {editingIndex !== null ? "Update Testimonial" : "Add Testimonial"}
          </button>
        </form>
      )}

      {testimonials.length > 0 && (
        <table className="mt-6 w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Video
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial, index) => (
              <tr key={index} className="border-t">
                <td className="border border-gray-300 px-4 py-2">
                  {testimonial.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <video className="w-full max-w-xs" controls>
                    <source src={testimonial.videosrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Testimonial;

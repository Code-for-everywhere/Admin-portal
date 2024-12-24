import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
  setFormData,
  setEditingIndex,
  toggleFormVisibility,
  resetForm,
} from "../Store/testimonialSlice";

const Testimonial = () => {

  const [nameerror, setNameerror] = useState("");
  const [videoerror, setVideoerror] = useState("");
  const dispatch = useDispatch();
  const {testimonials, formData , isFormVisible , editingIndex} = useSelector((state) => state.testimonials);


  const handleInputChange = (e) => {
    const { name, value ,files } = e.target;

    if (name === "video" && files) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
  
      dispatch(
        setFormData({
          ...formData,
          [name]: previewUrl, // Store the preview URL
        })
      );
  
      // Optionally store the file separately in a local variable or upload it immediately
    } else {
      dispatch(
        setFormData({
          ...formData,
          [name]: value,
        })
      );
    }
    if(!formData.name){
      setNameerror("Please Enter Your Name:");
    }else{
      setNameerror("");
    }
    if(!formData.video){
      setVideoerror("Please Choose video:");
    }else{
      setVideoerror("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.video) {
      alert("All fields are required.");
      return;
    }

    if (editingIndex !== null) {
      dispatch(
        updateTestimonial({ index: editingIndex, updatedTestimonial: formData })
      );
    } else {
      dispatch(addTestimonial(formData));
    }

    dispatch(resetForm());
    dispatch(toggleFormVisibility());
  };

  const handleEdit = (index) => {
    dispatch( setFormData(testimonials[index]));
    dispatch(setEditingIndex(index));
    dispatch(toggleFormVisibility());
  };

  const handleDelete = (index) => {
    dispatch(deleteTestimonial(index));
  };

  return (
    <div className="p-4 max-w-full grow mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Testimonials
      </h1>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
        onClick={() => dispatch(toggleFormVisibility())}
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
            {nameerror && <p className="text-red-600">{nameerror}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Video URL
            </label>
            <input
              type="file"
              name="video"
              
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
            {videoerror && <p className="text-red-600">{videoerror}</p>}
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-1/7"
          >
            {editingIndex !== null ? "Update Testimonial" : "Add Testimonial"}
          </button>
        </form>
      )}

      {testimonials.length > 0 && (
        <div className="overflow-x-auto my-7">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="border-b bg-gray-200 text-left">
              <th className="px-4 py-2">
                Name
              </th>
              <th className="px-4 py-2">
                Video
              </th>
              <th className="px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">
                  {testimonial.name}
                </td>
                <td className="px-4 py-2">
                  <video className="w-full max-w-xs" controls>
                    <source src={testimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </td>
                <td className=" px-4 py-2 text-center">
                  <div className="flex justify-start space-x-2">
                    <button
                      className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-green-900"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900"
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
      </div>)}
    </div>
  );
};

export default Testimonial;

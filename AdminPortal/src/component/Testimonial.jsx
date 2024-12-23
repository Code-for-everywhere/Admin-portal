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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.videosrc) {
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

    setFormData({ name: "", videosrc: "" });
    setIsFormVisible(false);
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
    <div className="p-4 max-w-full grow mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Testimonials
      </h1>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
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
              required
            />
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
              required
            />
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
                    <source src={testimonial.videosrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </td>
                <td className=" px-4 py-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
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
      </div>)}
    </div>
  );
};

export default Testimonial;

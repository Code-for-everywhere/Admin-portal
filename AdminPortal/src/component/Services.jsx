import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  updateItem,
  deleteItem,
  setFormData,
  setEditingIndex,
  toggleFormVisibility,
  resetForm,
} from "../Store/serviceSlice";

export default function Services() {
  const dispatch = useDispatch();
  const { items, formData, isFormVisible, editingIndex } = useSelector(
    (state) => state.services
  );

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    dispatch(
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      })
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.image) {
      alert("All fields are required, including the image.");
      return;
    }

    if (editingIndex !== null) {
      dispatch(updateItem({ index: editingIndex, updatedItem: formData }));
    } else {
      dispatch(addItem(formData));
    }

    dispatch(resetForm());
    dispatch(toggleFormVisibility());
  };

  const handleEdit = (index) => {
    dispatch(setFormData(items[index]));
    dispatch(setEditingIndex(index));
    dispatch(toggleFormVisibility());
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  return (
    <div className="max-w-full mx-2">
      <h1 className="w-full h-16 rounded bg-gray-300 items-center flex justify-center text-xl sm:text-2xl lg:text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl">
        Service
      </h1>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-2 rounded hover:bg-gray-600"
        onClick={() => dispatch(toggleFormVisibility())}
      >
        Add New Service
      </button>

      {isFormVisible && (
        <form
          className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={handleInputChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            {editingIndex !== null ? "Update Item" : "Add Item"}
          </button>
        </form>
      )}

      {items.length > 0 && (
        <div className="overflow-x-auto my-7">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="border-b bg-gray-200 text-left">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>

                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 flex items-center space-x-2">
                    {item.image && (
                      <img
                        src={URL.createObjectURL(item.image)}
                        alt={item.title}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                  </td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
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
        </div>
      )}
    </div>
  );
}

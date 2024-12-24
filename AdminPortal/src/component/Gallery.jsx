import { useSelector, useDispatch } from "react-redux";
import {
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  setFormData,
  setEditingIndex,
  toggleFormVisibility,
  resetForm,
} from "../Store/gallerySlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { galleryItems, formData, isFormVisible, editingIndex } = useSelector(
    (state) => state.gallery
  );

  const handleInputChange = (e) => {
    const { name, files } = e.target;

    if (name === "image" && files) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);

      dispatch(
        setFormData({
          ...formData,
          [name]: previewUrl,
        })
      );
    }

    if (name === "type") {
      dispatch(
        setFormData({
          ...formData,
          [name]: e.target.value,
        })
      );
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.image || !formData.type) {
      alert("All fields are required.");
      return;
    }

    if (editingIndex !== null) {
      dispatch(
        updateGalleryItem({
          type: formData.type,
          index: editingIndex,
          updatedItem: formData,
        })
      );
    } else {
      dispatch(
        addGalleryItem({
          type: formData.type,
          item: formData,
        })
      );
    }

    dispatch(resetForm());
    dispatch(setEditingIndex(null));
    dispatch(toggleFormVisibility());
  };

  const handleEdit = (type, index) => {
    dispatch(setFormData({ ...galleryItems[type][index], type }));
    dispatch(setEditingIndex(index));
    dispatch(toggleFormVisibility());
  };

  const handleDelete = (type, index) => {
    dispatch(deleteGalleryItem({ type, index }));
  };

  const renderTable = (type, title) => {
    return (
      <div className="my-7">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {galleryItems[type] && galleryItems[type].length > 0 ? (
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="border-b bg-gray-200 text-left">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {galleryItems[type].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">
                    <img className="w-full max-w-xs" src={item.image} />
                     
                      
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-start space-x-2">
                      <button
                        className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-900"
                        onClick={() => handleEdit(type, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-900"
                        onClick={() => handleDelete(type, index)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items in {title.toLowerCase()}.</p>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 max-w-full grow mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Gallery
      </h1>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
        onClick={() => {
          dispatch(resetForm());
          dispatch(setEditingIndex(null));
          dispatch(toggleFormVisibility());
        }}
      >
        Add New Item
      </button>

      {isFormVisible && (
        <form
          className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Type
            </label>
            <select
              name="type"
              value={formData.type || ""}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="" disabled>
                Choose a category
              </option>
              <option value="festival">Festival</option>
              <option value="event">Event</option>
              <option value="hackathon">Hackathon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-1/7"
          >
            {editingIndex !== null ? "Update Item" : "Add Item"}
          </button>
        </form>
      )}

      {renderTable("festival", "Festivals")}
      {renderTable("event", "Events")}
      {renderTable("hackathon", "Hackathons")}
    </div>
  );
};

export default Gallery;

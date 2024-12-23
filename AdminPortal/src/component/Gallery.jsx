import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGalleryItem, updateGalleryItem, deleteGalleryItem } from "../Store/gallerySlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const galleryItems = useSelector((state) => state.gallery.galleryItems);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    FestivalsUrl: "",
    HackathonUrl: "",
    TeamEventsUrl: "",
  });
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

    if (!formData.FestivalsUrl || !formData.HackathonUrl || !formData.TeamEventsUrl) {
      alert("All fields are required.");
      return;
    }

    if (editingIndex !== null) {
      // Update existing gallery item
      dispatch(updateGalleryItem({ index: editingIndex, updatedItem: formData }));
    } else {
      // Add new gallery item
      dispatch(addGalleryItem(formData));
    }

    setFormData({ FestivalsUrl: "", HackathonUrl: "", TeamEventsUrl: "" });
    setIsFormVisible(false);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(galleryItems[index]);
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  const handleDelete = (index) => {
    dispatch(deleteGalleryItem(index));
  };

  return (
    <div className="p-4 max-w-full grow mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Gallery
      </h1>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
        onClick={() => setIsFormVisible(true)}
      >
        Add New Gallery Item
      </button>

      {isFormVisible && (
        <form className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Festivals URL</label>
            <input
              type="url"
              name="FestivalsUrl"
              value={formData.FestivalsUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Hackathon URL</label>
            <input
              type="url"
              name="HackathonUrl"
              value={formData.HackathonUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Team Events URL</label>
            <input
              type="url"
              name="TeamEventsUrl"
              value={formData.TeamEventsUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            {editingIndex !== null ? "Update Gallery Item" : "Add Gallery Item"}
          </button>
        </form>
      )}

      {galleryItems.length > 0 && (
        <div className="overflow-x-auto my-7">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="border-b bg-gray-200 text-left">
              <th className="px-4 py-2">Festivals</th>
              <th className="px-4 py-2">Hackathons</th>
              <th className="px-4 py-2">Team Events</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">
                  <a href={item.FestivalsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Festivals
                  </a>
                </td>
                <td className="px-4 py-2">
                  <a href={item.HackathonUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Hackathons
                  </a>
                </td>
                <td className="px-4 py-2">
                  <a href={item.TeamEventsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Team Events
                  </a>
                </td>
                <td className="px-4 py-2">
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

export default Gallery;

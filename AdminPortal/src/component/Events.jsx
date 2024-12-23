import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEvent, updateEvent, deleteEvent } from "../Store/eventSlice";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ eventImgUrl: "", eventName: "" });
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

    if (!formData.eventImgUrl || !formData.eventName) {
      alert("All fields are required.");
      return;
    }

    if (editingIndex !== null) {
      // Update existing event
      dispatch(updateEvent({ index: editingIndex, updatedEvent: formData }));
    } else {
      // Add new event
      dispatch(addEvent(formData));
    }

    setFormData({ eventImgUrl: "", eventName: "" });
    setIsFormVisible(false);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(events[index]);
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  const handleDelete = (index) => {
    dispatch(deleteEvent(index));
  };

  return (
    <div className="p-4 max-w-full grow mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Events
      </h1>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
        onClick={() => setIsFormVisible(true)}
      >
        Add New Event
      </button>

      {isFormVisible && (
        <form className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Image URL</label>
            <input
              type="url"
              name="eventImgUrl"
              value={formData.eventImgUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            {editingIndex !== null ? "Update Event" : "Add Event"}
          </button>
        </form>
      )}

      {events.length > 0 && (
        <div className="overflow-x-auto my-7">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="border-b bg-gray-200 text-left">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Event Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 flex items-center space-x-2">
                  <img
                    src={event.eventImgUrl}
                    alt={event.eventName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2">{event.eventName}</td>
                <td className="px-4 py-2">
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
      </div>)}
    </div>
  );
};

export default Events;

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addEvent, updateEvent, deleteEvent ,setFormData,setEditingIndex,toggleFormVisibility,resetForm} from "../Store/eventSlice";


const Events = () => {

  const [nameerror, setNameerror] = useState("");
  const [imageerror, setImageerror] = useState("");
  const dispatch = useDispatch();
  const {events,formData , isFormVisible , editingIndex} = useSelector((state) => state.events);
  

  const handleInputChange = (e) => {
    const { name,value, files } = e.target;
    
    if(name === "image" && files) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);

      dispatch(
        setFormData({
          ...formData,
          [name] : previewUrl,
        })
      );
    }
    else {
      dispatch (
        setFormData({
          ...formData,
          [name]:value,
        })
      )
    }
    if(!formData.eventName){
      setNameerror("Please Enter Name");
    }
    else{
      setNameerror("");
    }
    if(!formData.image){
      setImageerror("Please Choose Image");
    }else{
      setImageerror("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.image || !formData.eventName) {
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

    dispatch(resetForm());
    dispatch(toggleFormVisibility());
  };

  const handleEdit = (index) => {
    dispatch( setFormData(events[index]));
    dispatch(setEditingIndex(index));
    dispatch(toggleFormVisibility());
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
        onClick={() => dispatch(toggleFormVisibility())}
      >
        Add New Event
      </button>

      {isFormVisible && (
        <form className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
            {nameerror && <p className="text-red-600">{nameerror}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Image URL</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
            {imageerror && <p className="text-red-600">{imageerror}</p>}
          </div>

         
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-1/7"
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
                    src={event.image}
                    alt={event.eventName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2">{event.eventName}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-start space-x-2">
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
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

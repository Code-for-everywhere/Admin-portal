import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEvent, updateEvent, deleteEvent } from "../Store/eventSlice";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ eventImgUrl: "", eventName: "" });
  const [editingIndex, setEditingIndex] = useState(null);
  const [eventnamerror, setEventnameerror] =  useState("");
  const [imageerror,setimageerror] = useState("");
  const [status, setStatus] =useState("");


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

      if(!formData.eventImgUrl){
        setimageerror("Please Enter You image URL");

        isValid = false;

      }
      if(!formData.eventName){
        setEventnameerror("Please Enter The event name:");

        isValid = false;

      }
   

    if (editingIndex !== null) {
      // Update existing event
      if(isValid){
        dispatch(updateEvent({ index: editingIndex, updatedEvent: formData }));
      }
    }
      else{
        if(isValid){
        dispatch(addEvent(formData));
        }
        else{
          setStatus("Pleaase Enter all req data")
        }
      }
     
    
    
    if(isValid){
    setIsFormVisible(false);
    }else{
      setIsFormVisible(true);
    }
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
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Events
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
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
            {imageerror && <p className="text-red-600">{imageerror}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
            {eventnamerror && <p className="text-red-600">{eventnamerror}</p>}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            {editingIndex !== null ? "Update Event" : "Add Event"}
          </button>
        </form>
       
      )}
       {status && <p className="text-red-600">{status}</p>}

      {events.length > 0 && (
        <table className="mt-6 w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Event Name</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="border-t">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={event.eventImgUrl}
                    alt={event.eventName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{event.eventName}</td>
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

export default Events;

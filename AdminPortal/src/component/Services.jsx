import { useState } from "react";


export default function Services ( ){
   
    const [items, setItems] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({ title: "", description: "", image: null });
    const [editingIndex, setEditingIndex] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value, files } = e.target;
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!formData.title || !formData.description || !formData.image) {
        alert("All fields are required, including the image.");
        return;
      }
      if (editingIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editingIndex] = formData;
        setItems(updatedItems);
      } else {
        setItems([...items, formData]);
      }
      setFormData({ title: "", description: "", image: null });
      setIsFormVisible(false);
      setEditingIndex(null);
    };
  
    const handleEdit = (index) => {
      setFormData(items[index]);
      setEditingIndex(index);
      setIsFormVisible(true);
    };
  
    const handleDelete = (index) => {
      setItems(items.filter((_, i) => i !== index));
    };
  
    return (
      <div className=" max-w-full mx-2">
        <h1 className="w-full  h-16 rounded bg-gray-300 items-center flex justify-center text-xl sm:text-2xl lg:text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl">Service</h1>
        <button
          className="bg-gray-500 text-white px-4 py-2 mt-2 rounded hover:bg-gray-600"
          onClick={() => setIsFormVisible(true)}
        >
          Add New
        </button>
  
        {isFormVisible && (
          <form className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
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
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              ></textarea>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
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
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Image</th>
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
                <td className=" px-4 py-2">{item.title}</td>
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
     </div> )}
        {/* <ul className="mt-2 space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 border rounded-md shadow-sm"
            >
              <div className="flex pr-4">
              {item.image && (
                  <img
                    src={URL.createObjectURL(item.image)}
                    alt={item.title}
                    className="mt-2 w-20 h-20 object-cover rounded"
                  />
                )} 
                <div className="mt-2 ml-2">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                
                
              </div>
              <div className="flex space-x-2">
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
            </li>
          ))}
        </ul> */}
      </div>
    );
  };
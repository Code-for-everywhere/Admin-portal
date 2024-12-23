import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAward, updateAward, deleteAward } from "../Store/awardSlice";

const Award = () => {
  const dispatch = useDispatch();
  const awards = useSelector((state) => state.awards.awards) || [];
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    imgUrl: "",
    description: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [inputreq, setInputreq] =useState('');
  const [imgreq, setImgreq] = useState('');
  const [textreq, setTextreq] = useState('');
  const [status, setStatus] = useState("");


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

    
      if(!formData.title){
      setInputreq("please Enter Title:");
      isValid = false;

      }
      else{
        setInputreq("");
      
      if(!formData.imgUrl){
        setImgreq("please Choose Image:");
      isValid = false;

      }
      else{
        setImgreq("");
      }
      }
      if(!formData.description){
        setTextreq("Please Write Some description of Title");
      isValid = false;
       
      }else{
      setTextreq("");

      }
      
    
     

    if (editingIndex !== null) {
      if(isValid){
      dispatch(updateAward({ index: editingIndex, updatedAward: formData }));
      }
    } else {
      if(isValid){
      dispatch(addAward(formData));
      
      }
      else{
           setStatus("please Enter all req data:");
      }
    }
      if(isValid){
        setFormData({ title: "", imgUrl: "", description: "" });

      }
    if(isValid){
      setIsFormVisible(false);
    }
    else{
      setIsFormVisible(true);
    }
   
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(awards[index]);
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  const handleDelete = (index) => {
    dispatch(deleteAward(index));
  };

  return (
    <div className="p-4 max-w-full grow mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Awards
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        onClick={() => setIsFormVisible(true)}
      >
        Add New Award
      </button>

      {isFormVisible && (
        <form
          className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Award Name
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {inputreq && <p className="text-red-600">{inputreq}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
              {imgreq && <p className="text-red-600">{imgreq}</p>}

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
              
            ></textarea>
              {textreq && <p className="text-red-600">{textreq}</p>}

          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            {editingIndex !== null ? "Update Award" : "Add Award"}
          </button>
        </form>
      )}

      {awards && awards.length > 0 ? (
  <div className="overflow-x-auto my-7">
    <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
      <thead>
        <tr className="border-b bg-gray-200 text-left">
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {awards.map((award, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 py-2 flex items-center space-x-2">
              <img
                src={award.imgUrl}
                alt={award.title}
                className="w-10 h-10 rounded-full object-cover"
              />
            </td>
            <td className="px-4 py-2">{award.title}</td>
            <td className="px-4 py-2">{award.description}</td>
            <td className="px-4 py-2 text-center">
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
  </div>
) : (
  <p>No awards available.</p>
)}

    </div>
  );
};

export default Award;

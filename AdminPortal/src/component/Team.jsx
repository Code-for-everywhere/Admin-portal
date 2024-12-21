import { useDispatch, useSelector } from "react-redux";
import { 
  setFormVisibility, 
  setFormData, 
  setEditingIndex, 
  addMember, 
  updateMember, 
  deleteMember,
   
} from "../Store/teamSlice"; 


const Team = () => {
  const dispatch = useDispatch();
  const { members, isFormVisible, formData, editingIndex } = useSelector((state) => state.team);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.position || !formData.imgUrl) {
      alert("All fields are required.");
      return;
    }

    if (editingIndex !== null) {
      dispatch(updateMember());
    } else {
      dispatch(addMember());
    }
  };

  const handleEdit = (index) => {
    dispatch(setFormData(members[index]));
    dispatch(setEditingIndex(index));
    dispatch(setFormVisibility(true));
  };

  const handleDelete = (index) => {
    dispatch(deleteMember(index));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Team Members
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        onClick={() => dispatch(setFormVisibility(true))}
      >
        Add New Member
      </button>

      {isFormVisible && (
        <form className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
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
            <label className="block text-sm font-medium text-gray-700">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            {editingIndex !== null ? "Update Member" : "Add Member"}
          </button>
        </form>
      )}

      {members.length > 0 && (
        <table className="mt-6 w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Position</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-t">
                <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                <td className="border border-gray-300 px-4 py-2">{member.position}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={member.imgUrl}
                    alt={member.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
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

export default Team;

import { useDispatch, useSelector } from "react-redux";
import {
  toggleFormVisibility,
  setFormData,
  setEditingIndex,
  addMember,
  updateMember,
  deleteMember,
  resetForm,
} from "../Store/teamSlice";

const Team = () => {
  const dispatch = useDispatch();
  const { members, isFormVisible, formData, editingIndex } = useSelector(
    (state) => state.team
  );

  const handleInputChange = (e) => {
    const { name, value , files } = e.target;
    if (name === "image" && files) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
  
      dispatch(
        setFormData({
          ...formData,
          [name]: previewUrl, // Store the preview URL
        })
      );
  
      // Optionally store the file separately in a local variable or upload it immediately
    } else {
      dispatch(
        setFormData({
          ...formData,
          [name]: value,
        })
      );
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.position || !formData.image) {
      alert("All fields are required.");
      return;
    }

    if (editingIndex !== null) {
      dispatch(updateMember({ index: editingIndex, updatedAward: formData }));

    } else {
      dispatch(addMember(formData));
    }

    dispatch(resetForm());
    dispatch(toggleFormVisibility());
  };

  const handleEdit = (index) => {
    dispatch(setFormData(members[index]));
    dispatch(setEditingIndex(index));
    dispatch(toggleFormVisibility());
  };

  const handleDelete = (index) => {
    dispatch(deleteMember(index));
  };

  return (
    <div className="p-4 max-w-full grow mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Team Members
      </h1>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
        onClick={() => dispatch(toggleFormVisibility())}
      >
        Add New Member
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
              Position
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-1/7"
          >
            {editingIndex !== null ? "Update Member" : "Add Member"}
          </button>
        </form>
      )}

      {members.length > 0 && (
        <div className="overflow-x-auto my-7">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="border-b bg-gray-200 text-left">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 flex items-center space-x-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{member.name}</td>
                  <td className=" px-4 py-2">{member.position}</td>

                  <td className=" px-4 py-2 text-center">
                    <div className="flex justify-start space-x-2">
                      <button
                        className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-950"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-950"
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
};

export default Team;

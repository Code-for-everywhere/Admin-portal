import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog, updateBlog, deleteBlog } from '../Store/blogSlice';

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ title: '', imgUrl: '', description: '' });
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

    if (!formData.title || !formData.imgUrl || !formData.description) {
      alert('All fields are required.');
      return;
    }

    if (editingIndex !== null) {
      dispatch(updateBlog({ index: editingIndex, updatedBlog: formData }));
    } else {
      dispatch(addBlog(formData));
    }

    setFormData({ title: '', imgUrl: '', description: '' });
    setIsFormVisible(false);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(blogs[index]);
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  const handleDelete = (index) => {
    dispatch(deleteBlog(index));
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Blog
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        onClick={() => setIsFormVisible(true)}
      >
        Add New Blog
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

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            {editingIndex !== null ? 'Update Blog' : 'Add Blog'}
          </button>
        </form>
      )}

      {blogs.length > 0 && (
        <table className="mt-6 w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={index} className="border-t">
                <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={blog.imgUrl}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{blog.description}</td>
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

export default Blog;

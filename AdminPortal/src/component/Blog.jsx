import { useDispatch, useSelector } from 'react-redux';
import { addBlog, updateBlog, deleteBlog , setFormData,setEditingIndex , toggleFormVisibility,resetForm } from '../Store/blogSlice';

const Blog = () => {
  const dispatch = useDispatch();
  const {blogs ,formData , isFormVisible,editingIndex} = useSelector((state) => state.blogs);
 

  const handleInputChange = (e) => {
    const { name, value ,files } = e.target;

    if(name === "image" && files) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
    dispatch(
    setFormData({
      ...formData,
      [name]: previewUrl,
    }));
  }
  else {
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

    if (!formData.title || !formData.image || !formData.description) {
      alert('All fields are required.');
      return;
    }
    const file = document.querySelector("input[name='image']").files[0];
    if (file) {
//
    }


    if (editingIndex !== null) {
      dispatch(updateBlog({ index: editingIndex, updatedBlog: formData }));
    } else {
      dispatch(addBlog(formData));
    }

dispatch(resetForm());
dispatch(toggleFormVisibility());
  };

  const handleEdit = (index) => {
    dispatch(setFormData(blogs[index]))
   
    dispatch(setEditingIndex(index))
    dispatch(toggleFormVisibility());
  };

  const handleDelete = (index) => {
    dispatch(deleteBlog(index));
  };

  return (
    <div className="p-4 max-w-full grow mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Blog
      </h1>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
        onClick={() => dispatch(toggleFormVisibility())}
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
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="file"
              name="image"
              accept='image/*'
              
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-1/8"
          >
            {editingIndex !== null ? 'Update Blog' : 'Add Blog'}
          </button>
        </form>
      )}

      {blogs.length > 0 && (
        <div className='overflow-x-auto my-7'>
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className='border-b bg-gray-200 text-left'>
              
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 flex items-center space-x-2">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2">{blog.title}</td>
                
                <td className="px-4 py-2">{blog.description}</td>
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

export default Blog;

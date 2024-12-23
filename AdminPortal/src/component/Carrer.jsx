import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCareerSubmission } from '../Store/careerSlice';

const Career = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    number: "",
    source: "",
    message: "",
  });

  const [nameerror,setNameerror] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const [countryerror, setCountryError] = useState("");
  const [numbererror, setNumbererror] = useState("");
  const [sourceerror, setSourceerror] = useState("");
  const [messgerror, setMessgerror] = useState("");


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
    const { name, email, countryCode, number, source, message } = formData;

   
      if(!name){
        setNameerror("Please Enter Your name:");
        isValid = false;
      }
      else{
        setNameerror("");
      }
      if(!email){
        setEmailerror("Please Enter your email here:");
        isValid = false;
      }else{
        setEmailerror("");
      }
      if(!countryCode){
        setCountryError("Please Enter Your Country Name here:");
        isValid = false;
      }else{
        setCountryError("");
      }
      if(!number){
      setNumbererror("please Enter Your Phone number:");
      isValid = false
      }else{
        setNumbererror("");
      }
      if(!source){
        setSourceerror("Please Enter From Where you got:");
        isValid = false;
      }else{
        setSourceerror("");
      }
      if(!message){
        setMessgerror("Please Enter Your message here:");
        isValid = false;
      }else{
        setMessgerror("");
      }
      
    

    // Dispatch career submission to Redux store
    dispatch(addCareerSubmission(formData));

    console.log("Form Submitted", formData);

    // Reset form data after submission
    if(isValid){
    setFormData({
      name: "",
      email: "",
      countryCode: "",
      number: "",
      source: "",
      message: "",
    });
     }

    
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="w-full h-16 rounded bg-gray-300 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
        Career Form
      </h1>

      <form className="mt-4 space-y-4 w-full bg-white p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            
          />
          {nameerror && <p className='text-red-600'>{nameerror}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            
          />
          {emailerror && <p className='text-red-600'>{emailerror}</p>}
        </div>

        <div className="flex space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Country Code</label>
            <input
              type="text"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
            {countryerror && <p className='text-red-600'>{countryerror}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              
            />
            {numbererror && <p className='text-red-600'>{numbererror}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
          <select
            name="source"
            value={formData.source}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            
          >
            <option value="" disabled>Select an option</option>
            <option value="Google">Google</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Friend Suggested">Friend Suggested</option>
            <option value="Others">Others</option>
          </select>
          {sourceerror && <p className='text-red-600'>{sourceerror}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            
          ></textarea>
          {messgerror && <p className='text-red-600'>{messgerror}</p>}
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Career;

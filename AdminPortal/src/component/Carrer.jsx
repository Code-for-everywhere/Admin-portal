

const Career = () => {
const tableData = [
  { name: "John Doe", email: "john.doe@example.com", countryCode: "+1", phoneNumber: "1234567890", hearAboutUs: "Social Media", message: "Looking forward to collaborating!" },
  { name: "Jane Smith", email: "jane.smith@example.com", countryCode: "+44", phoneNumber: "9876543210", hearAboutUs: "Friend Referral", message: "Excited to join the platform!" },
  { name: "Alice Johnson", email: "alice.johnson@example.com", countryCode: "+91", phoneNumber: "9988776655", hearAboutUs: "Online Ad", message: "Interested in your services." },
  { name: "Bob Brown", email: "bob.brown@example.com", countryCode: "+33", phoneNumber: "5647382910", hearAboutUs: "Newsletter", message: "Would love to learn more." },
  { name: "Charlie Davis", email: "charlie.davis@example.com", countryCode: "+81", phoneNumber: "8493021746", hearAboutUs: "Event", message: "Great presentation!" },
  { name: "Emily Evans", email: "emily.evans@example.com", countryCode: "+49", phoneNumber: "6758492031", hearAboutUs: "Google Search", message: "Very useful information." },
  { name: "Frank Green", email: "frank.green@example.com", countryCode: "+61", phoneNumber: "7864392150", hearAboutUs: "Webinar", message: "Learned a lot from your session." },
  { name: "Grace Hall", email: "grace.hall@example.com", countryCode: "+86", phoneNumber: "5094837621", hearAboutUs: "Advertisement", message: "Interested in a demo." },
  { name: "Henry Harris", email: "henry.harris@example.com", countryCode: "+7", phoneNumber: "6789302845", hearAboutUs: "LinkedIn", message: "Please contact me for further discussions." },
  { name: "Isabella King", email: "isabella.king@example.com", countryCode: "+34", phoneNumber: "9873201456", hearAboutUs: "Twitter", message: "Loved your recent post." },
  { name: "Jack Lee", email: "jack.lee@example.com", countryCode: "+55", phoneNumber: "8495739201", hearAboutUs: "YouTube", message: "Your videos are very helpful!" },
  { name: "Karen Miller", email: "karen.miller@example.com", countryCode: "+27", phoneNumber: "3054891762", hearAboutUs: "Instagram", message: "Looking forward to updates." },
  { name: "Liam Nelson", email: "liam.nelson@example.com", countryCode: "+20", phoneNumber: "6074892031", hearAboutUs: "Family Recommendation", message: "Heard great things about your services." },
  { name: "Mia Parker", email: "mia.parker@example.com", countryCode: "+1", phoneNumber: "5038946720", hearAboutUs: "Online Blog", message: "Very informative content." },
  { name: "Noah Quinn", email: "noah.quinn@example.com", countryCode: "+44", phoneNumber: "2049837615", hearAboutUs: "Facebook", message: "Great product reviews!" },
  { name: "Olivia Roberts", email: "olivia.roberts@example.com", countryCode: "+91", phoneNumber: "9485736201", hearAboutUs: "Online Course", message: "Loved the practical tips." },
  { name: "Peter Scott", email: "peter.scott@example.com", countryCode: "+33", phoneNumber: "3948576201", hearAboutUs: "Conference", message: "Would like to collaborate." },
  { name: "Quinn Taylor", email: "quinn.taylor@example.com", countryCode: "+81", phoneNumber: "6845739201", hearAboutUs: "Flyer", message: "Intrigued by your flyer." },
  { name: "Sophia Walker", email: "sophia.walker@example.com", countryCode: "+49", phoneNumber: "4950837621", hearAboutUs: "Press Release", message: "Impressed with your achievements." },
  { name: "Thomas Young", email: "thomas.young@example.com", countryCode: "+61", phoneNumber: "8594739201", hearAboutUs: "Google Ads", message: "Please provide more details." },
];

return(
<div className='overflow-x-auto my-7'>
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className='border-b bg-gray-200 text-left'>
              
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Country Code</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Hear About us</th>
              <th className="px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{data.name}</td>
                <td className="px-4 py-2">{data.email}</td>
                <td className="px-4 py-2">{data.countryCode}</td>
                <td className="px-4 py-2">{data.phoneNumber}</td>
                <td className="px-4 py-2">{data.hearAboutUs}</td>
                <td className="px-4 py-2">{data.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
);
}
export default Career;
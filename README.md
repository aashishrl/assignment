React Multi-Step Form with OTP Verification and File Upload
This project is a React application built using Vite.
 It features a multi-step form that enables users to verify their identity using OTP (One-Time Password) sent via phone or email. Additionally, the form includes file upload functionality, allowing users to upload documents like a Certificate of Incorporation or a Company Logo.

The project ensures a smooth user experience with validations, masked inputs, and a drag-and-drop file upload system.

Features
1. Phone/Email Validation
Phone Number Validation:
Must start with 97 or 98 and be exactly 10 digits long.
Alphabets are not allowed.
Email Validation:
Must end with @gmail.com.

2. Masked Inputs
For security, phone numbers and email addresses are partially masked:
Example: ********49 for phone, a*****h@gmail.com for email.

3. OTP Input
A 6-digit OTP field allows only numbers.
Automatically focuses on the next field as digits are entered.

4. Resend OTP Timer
Displays a countdown before the "Resend OTP" option becomes active.

5. Form Layout
The form uses a CSS Grid layout with two columns for organized input fields.
Elements like the file upload section span the full width for better usability.

6. File Uploads
Drag-and-Drop:
Users can drag and drop files into the upload area.
A "Browse Files" button is available for traditional uploads.
Preview:
A preview is displayed for uploaded images.
Dynamic Feedback:
The upload area changes appearance when a file is being dragged over.

7. Autoprefixer is used to ensure consistent styling across different browsers.

* Problem and Solution
Problem:
When building the form layout with CSS Grid, some sections (like the file upload area) needed to span across both columns. By default, these sections were constrained to a single column, disrupting the layout.

Solution:
We used the CSS property grid-column: span 2; to allow specific elements to take up the full width of the grid. This ensured a clean and functional layout.

How to Run the Project
Clone the repository:
bash
Copy code
git clone https://github.com/your-repo-name.git
Navigate to the project folder:
bash
Copy code
cd your-repo-name
Install dependencies:
bash
Copy code
npm install
Run the development server:
bash
Copy code
npm run dev
Open your browser and go to http://localhost:5173.

* File Structure
graphql
src/
├── components/
│   ├── IntermediatePage/
│   │   └── FileUpload.jsx       # Drag-and-drop file upload component
│   ├── SignupPage/
│   │   ├── EnterOtp.jsx         # OTP input form
│   │   └── EnterPhone.jsx       # Phone/email input form
├── hooks/
│   └── useFileUpload.js         # Custom hook for file upload logic
├── pages/
│   ├── IntermediatePage/
│   │   ├── IntermediatePage.css # Styles for the intermediate page
│   │   └── IntermediatePage.jsx # Form with file upload and validations
│   ├── SignupPage/
│   │   ├── SignupPage.css       # Styles for the signup page
│   │   └── SignupPage.jsx       # Entry point for OTP and phone steps
├── utils/
│   └── ValidateInput.jsx        # Input validation logic (e.g., phone/email)
├── App.css                      # Global application styles
├── App.jsx                      # Root component
├── index.css                    # Global index styles
└── main.jsx                     # Application entry point

Feedback and Future Improvements
If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

Planned improvements include:

Integrating server-side OTP verification.
Adding support for non-Gmail email domains.
Enhanced file validation (e.g., file type and size checks).
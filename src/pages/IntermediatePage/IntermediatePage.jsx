import React from 'react';
import './IntermediatePage.css';
import FileUpload from '../../components/IntermediatePage/FileUpload';
import useFileUpload from '../../hooks/useFileUpload';

const IntermediatePage = () => {
  // Separate hooks for each file upload
  const {
    selectedFile: selectedFile1,
    preview: preview1,
    isDragging: isDragging1,
    handleDrop: handleDrop1,
    handleDragOver: handleDragOver1,
    handleDragLeave: handleDragLeave1,
    handleInputFileChange: handleInputFileChange1
  } = useFileUpload();  // Certification of Incorporation

  const {
    selectedFile: selectedFile2,
    preview: preview2,
    isDragging: isDragging2,
    handleDrop: handleDrop2,
    handleDragOver: handleDragOver2,
    handleDragLeave: handleDragLeave2,
    handleInputFileChange: handleInputFileChange2
  } = useFileUpload();  // Company Logo

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log('Certification of Incorporation File:', selectedFile1);
    console.log('Company Logo File:', selectedFile2);
  };

  return (
    <div className='intermediate-page'>
      <h2 className='intermediate-page-header'>Multi-Step Process Form Assignment</h2>
      <div className='multipstep-progress-bar'>
        <div className='progress-bar'>
          <ul>
            <li className='straight-line straight-line1'></li>
            <li className='straight-line straight-line2'></li>
            <li className='straight-line straight-line3'></li>
            <li className='straight-line straight-line4'></li>
            <li className='straight-line straight-line5'></li>
            <li className='straight-line straight-line6'></li>
            <li className='straight-line straight-line7'></li>
            <li className='last-circle'></li>

          </ul>
        </div>
        <ul className='details'>
          <li>Business <br /> Type</li>
          <li>Business <br /> Details</li>
          <li>Authorized Representation</li>
          <li>Business <br /> Owners</li>
          <li>Company Directors</li>
          <li>Support Infromation</li>
          <li>Add <br /> Details</li>
          <li>Complete Registration</li>
        </ul>
      </div>
      <div className='intermediate-page-form'>
        <h3 className='form-header'>Tell us more about your business</h3>
        <p className='form-description'>Your info is like the Wi-Fi password—totally crucial for keeping things running, impressing the money folks, and making sure
        you get top-notch service without any buffering!</p>
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-row">
            <label htmlFor="legal-name">
              Legal Name <span>*</span>
            </label>
            <input
              type="text"
              id="legal-name"
              placeholder="Legal Name"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="doing-business-as">
              Doing Business as <span>*</span>
            </label>
            <input
              type="text"
              id="doing-business-as"
              placeholder="Doing Business as"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="company-registration-number">
              Company Registration Number <span>*</span>
            </label>
            <input
              type="text"
              id="company-registration-number"
              placeholder="Company Registration Number"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="random-registration-number">
              Random Registration Number <span>*</span>
            </label>
            <input
              type="text"
              id="random-registration-number"
              placeholder="Random Registration Number"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="website-url">
              Website URL <span>*</span>
            </label>
            <input
              type="text"
              id="website-url"
              placeholder="Website URL"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="industry-name">
              Industry Name <span>*</span>
            </label>
            <select id="industry-name" required>
              <option value="" hidden>Select Industry</option>
              <option value="industry1">Industry 1</option>
              <option value="industry2">Industry 2</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="random-dropdown">
              One Random Dropdown? <span>*</span>
            </label>
            <select id="random-dropdown" required>
              <option value="" hidden>Options nai options</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="select-dropdown">
              Which Dropdown would you like to select? <span>*</span>
            </label>
            <select id="select-dropdown" required>
              <option value="" hidden>More Options</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="another-random-dropdown">
              Another Random Dropdown Appears <span>*</span>
            </label>
            <select id="another-random-dropdown" required>
              <option value="" hidden>Return of More Options</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="account-usage-intent">
              Account Usage Intent <span>*</span>
            </label>
            <select id="account-usage-intent" required>
              <option value="" hidden>Select Intent</option>
              <option value="intent1">Intent 1</option>
              <option value="intent2">Intent 2</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="random-count-per-month">
              Random count per month <span>*</span>
            </label>
            <select id="random-count-per-month" required>
              <option value="" hidden>Put the value get the answer</option>
              <option value="count1">Count 1</option>
              <option value="count2">Count 2</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="expected-visits">
              Expected total visits in this page <span>*</span>
            </label>
            <select id="expected-visits" required>
              <option value="" hidden>In Number</option>
              <option value="visits1">1,000</option>
              <option value="visits2">10,000</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="purpose-using-form">
              Purpose of using fake form <span>*</span>
            </label>
            <textarea name="" id="purpose-using-form" placeholder="Purpose Using Form"></textarea>
          </div>
          <div className="form-row">
            <label htmlFor="product-description">
              Ek description toh banta hai <span>*</span>
            </label>
            <textarea name="" id="product-description" placeholder='Product Description'></textarea>
          </div>
          <div className="form-row">
            <label htmlFor="contact-email">
              Contact email <span>*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              placeholder="Contact email"
              required
            />
          </div>
          {/* File Upload 1: Certification of Incorporation */}
          <div className="file-upload">
            <h3 className='fileupload-header'>Certification of Incorporation <span>*</span></h3>
            <p className='fileupload-description'>Upload the incorporation certificate</p>
            <FileUpload
              selectedFile={selectedFile1}
              isDragging={isDragging1}
              handleDrop={handleDrop1}
              handleDragOver={handleDragOver1}
              handleDragLeave={handleDragLeave1}
              handleInputFileChange={handleInputFileChange1}
              id="fileInput1"  // Unique id for this file input
            />
            {preview1 && (
              <div className="form-row">
                <p>Preview:</p>
                <img src={preview1} alt="Preview" className="preview-image" />
              </div>
            )}
          </div>

          {/* File Upload 2: Company Logo */}
          <div className="file-upload">
            <h3 className='fileupload-header'>Company Logo <span>*</span></h3>
            <p className='fileupload-description'>Upload the company logo</p>
            <FileUpload
              selectedFile={selectedFile2}
              isDragging={isDragging2}
              handleDrop={handleDrop2}
              handleDragOver={handleDragOver2}
              handleDragLeave={handleDragLeave2}
              handleInputFileChange={handleInputFileChange2}
              id="fileInput2"  // Unique id for this file input
            />
            {preview2 && (
              <div className="form-row">
                <p>Preview:</p>
                <img src={preview2} alt="Preview" className="preview-image" />
              </div>
            )}
          </div>

          {/* Submit buttons */}
          <div className='submit-buttons'>
            <button className='previous'>Previous</button>
            <button type="submit" className='next'>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IntermediatePage;

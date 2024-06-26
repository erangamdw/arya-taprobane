import { tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { sendBooking } from "src/lib/api";

const typeOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24", "25", "25 plus"].map((it) => ({
  value: it,
  label: it,
}));

const customStyle = {
  valueContainer: (provided) => ({
    ...provided,
    color: "#787780",
    fontSize: 13,
    fontWeight: 500,
  }),
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    border: "none",
    boxShadow: "none",
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    color: "white",
    padding: "4px 20px",
    backgroundColor: state.isSelected ? "#e8604c" : "#313041",
    transition: "all 0.4s ease",
    cursor: "pointer",
    borderBottom:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "none"
        : "0.5px solid #ffffff33",
    "&:hover": {
      backgroundColor: "#e8604c",
    },
    borderRadius:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "0 0 8px 8px"
        : 0,
    fontSize: 16,
    fontWeight: 500,
  }),
  control: (base) => ({
    ...base,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "transparent",
    },
    padding: 14,
  }),
};



const handleSubmit = async (e) => {

  
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    // type,
    // ticket,
    name: formData.get("name"),
    email: formData.get("email"),
    contact: formData.get("contact"),
    // date: startDate,
  };
  
  try {
    const response = await sendBooking(data);
    if (response.ok) {
      console.log("Booking successful!");
      // Optionally, you can redirect the user or show a success message here
    } else {
      console.error("Booking failed:", response.statusText);
      // Optionally, you can handle error cases here
    }
  } catch (error) {
    console.error("An error occurred while booking:", error);
    // Handle any unexpected errors here
  }
};


const TourDetailsSidebar = () => {
  const [type, setType] = useState("Adventure");
  const [ticket, setTicket] = useState("Adventure");
  const [startDate, setStartDate] = useState(new Date());
  

  const handleSelectType = ({ value }) => {
    setType(value);
  };

  const handleSelectTicket = ({ value }) => {
    setTicket(value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = {
  //     type,
  //     ticket,
  //     place: formData.get("place"),
  //     when: formData.get("when"),
  //     date: startDate,
  //   };
  //   console.log(data);
  // };

  return (
    <div className="tour-details-two__sidebar">
      <div className="tour-details-two__book-tours">
        <h3 className="tour-details-two__sidebar-title">Book Tours</h3>
        <form
          onSubmit={handleSubmit}
          className="tour-details-two__sidebar-form"
        >
          <div className="tour-details-two__sidebar-form-input">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="tour-details-two__sidebar-form-input">
            <input type="text" placeholder="Email" name="email" />
          </div>
          <div className="tour-details-two__sidebar-form-input">
            <input type="text" placeholder="Contact Number" name="contact" />
          </div>
          {/* <div className="tour-details-two__sidebar-form-input">
            <Select
              name="type"
              options={typeOptions}
              onChange={handleSelectType}
              styles={customStyle}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              placeholder="Type"
              instanceId="tourTypeSelect10"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div> */}
          <div className="tour-details-two__sidebar-form-input">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select date"
              id="datepicker"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
          <div className="tour-details-two__sidebar-form-input">
            <Select
              name="ticket"
              options={typeOptions}
              onChange={handleSelectTicket}
              styles={customStyle}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              placeholder="Number of persons"
              instanceId="tourTypeSelect15"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
          <button
            style={{ zIndex: 0 }}
            type="submit"
            className="thm-btn tour-details-two__sidebar-btn"
            // onClick={handleSubmit}
          >
            Book Now
          </button>
        </form>
      </div>
      {/* <div className="tour-details-two__last-minute">
        <h3 className="tour-details-two__sidebar-title">Last Minute</h3>
        <ul className="tour-details-two__last-minute-list list-unstyled">
          {tourDetailsSidebar.map(({ id, title, image, price, location }) => (
            <li key={id}>
              <div className="tour-details-two__last-minute-image">
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="tour-details-two__last-minute-content">
                <h6>${price}</h6>
                <h5>{title}</h5>
                <p>{location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default TourDetailsSidebar;

import React from "react";
import "./AboutUs.css";
//import Popup from "../Popupwindow.js";

function AboutUs() {
  return (
    <div>
      <div className="first-part">
        <p className="about-title">
          <span>
            Visit the Memphis Brooks Museum of Art, located at the heart of
            Memphis in historic Overton Park.{" "}
          </span>
        </p>
        <div className="about-container">
          <img className="about-img" src="images/galleryAbout.jpg" alt="" />
          <p className="about-text1">
            We are proud to participate in Blue Star Museums, a partnership
            among the National Endowment for the Arts, Blue Star Families,
            Joining Forces, MetLife Foundation, and museums across the country.
            Memphis Brooks Museum of Art offers free entry for all active duty,
            National Guard and Reserve military personnel and their families all
            year long. Accessibility Wheelchairs Wheelchairs are available at
            admissions at the front entrance, on the main floor. If you would
            like Security to meet you at your car at the front entrance, please
            call 901.544.6200. There are a limited number of wheelchairs, so
            they are available on a first-come, first-served basis. The front is
            handicapped accessible with a ramp from the parking lot. Note: There
            is not an automatic door. ‍ Tours Tours for groups with special
            needs are available. To make a reservation, please contact the Tour
            Coordinator at 901.544.6215 or send an email. To protect the art,
            motion sensors are tripped at one foot from the artwork. Should an
            individual require more accessibility, please call our Visitor
            Services Manager at 901.544.6256 to arrange...
          </p>
        </div>
      </div>

      <p className="about-title">
        <span>BLUE STAR MUSEUM </span>
      </p>

      <p className="about-text">
        We are proud to participate in Blue Star Museums, a partnership among
        the National Endowment for the Arts, Blue Star Families, Joining Forces,
        MetLife Foundation, and museums across the country. Memphis Brooks
        Museum of Art offers free entry for all active duty, National Guard and
        Reserve military personnel and their families all year long.
        Accessibility Wheelchairs Wheelchairs are available at admissions at the
        front entrance, on the main floor. If you would like Security to meet
        you at your car at the front entrance, please call 901.544.6200. There
        are a limited number of wheelchairs, so they are available on a
        first-come, first-served basis. The front is handicapped accessible with
        a ramp from the parking lot. Note: There is not an automatic door. ‍
        Tours Tours for groups with special needs are available. To make a
        reservation, please contact the Tour Coordinator at 901.544.6215 or send
        an email. To protect the art, motion sensors are tripped at one foot
        from the artwork. Should an individual require more accessibility,
        please call our Visitor Services Manager at 901.544.6256 to arrange a
        tour with a member of our curatorial staff when the museum is closed to
        regular visitors. ‍ Sensory Processing Support The Brooks has partnered
        with KultureCity to improve our ability to assist and accommodate guests
        with sensory needs. The Brooks is committed to providing an inclusive
        and seamless experience for all guests for all events including those
        with sensory needs. We strive to raise awareness of the needs and
        challenges faced by individuals with sensory processing disorders by
        supplying our team with continuous training and by offering the
        resources and accommodations below to our guests. Weighted Lap Pads and
        Sensory Bags Weighted lap pads and sensory bags containing special KCVIP
        badges, fidget tools, noise canceling headphones and other resources are
        available at the Welcome Desk. Social Story and KultureCity
        All-Inclusive App Download the KultureCity All-Inclusive App (App Store
        and Google Play) to get your social story to help you further with your
        visit to Memphis' art museum.
      </p>
    </div>
  );
}

export default AboutUs;

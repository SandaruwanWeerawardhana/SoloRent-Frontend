import React from 'react'

function Map() {
  return (
    <div className="container">
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31712.063284632193!2d80.09745281083103!3d6.520680503796535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3cd23d2643e8d%3A0x85cd2d3d9fb59e60!2sMatugama!5e0!3m2!1sen!2slk!4v1742795668525!5m2!1sen!2slk"
        width="600"
        height="450"
        style={{ border: "0", width: "100%", height: "450px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  )
}

export default Map
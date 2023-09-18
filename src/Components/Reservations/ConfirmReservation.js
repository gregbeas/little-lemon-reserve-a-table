import './Reservations.scss';

const ConfirmReservation = ({formData, setFormData}) => {

  return (
    <>
      <section id="reservations-confirm">
        <h2>Little Lemon</h2>
        <h1>Confirm Reservation</h1>
        <div className="reservations-form" id="form2">
          <div className="input-div">
            <label htmlFor="name">Name: </label>
            <div className="input-wrapper">
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder="name"
                value= {formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                required
              ></input>
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="email">Email: </label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              ></input>
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="name">Phone: </label>
            <div className="input-wrapper">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input"
                title="0123456789"
                placeholder="0123456789"
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                required
              ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmReservation;

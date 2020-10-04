import React from 'react';

const NewsLetter = () => (
  <div className="newsLetter">
    <h2>Get the Spring newsletter</h2>
    <form>
      <div className="formGroup">
        <input className="formField" type="email" placeholder="Email Address" />
        <span>
          <button type="submit" className="formButton">SUBSCRIBE</button>
        </span>
      </div>
      <div className="agreement">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          Yes, I would like to be contacted by The Spring Team and VMware for
          newsletters, promotions and events per the terms of VMware’s Privacy
          Policy
        </label>
      </div>
    </form>
  </div>
);

export default NewsLetter;

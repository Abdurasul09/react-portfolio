import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import {FaUser} from "react-icons/fa";
import {AiTwotonePhone} from "react-icons/ai";

export const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div className="container">
        <div class="title reveal">
          <section class="section-title">Contact Me</section>
        </div>
        <div class="content">
          <div class="form-row">
            <div class="contact-form reveal">
              <h3>Send Message</h3>
              <div className="input-block">
                <div class="input-box">
                  <input type="text" placeholder="Name" />
                  <div className="form-icon">
                    <FaUser/>
                  </div>
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Email" />
                  <div className="form-icon">
                    <AiTwotonePhone/>
                  </div>
                </div>
              </div>
              <div class="input-box">
                <textarea cols="80" rows="8" placeholder="Message"></textarea>
              </div>
              <div class="input-box">
                <input type="submit" class="send-btn" value="Send" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card reveal">
              <div class="contact-icon">
                <MdLocationOn />
              </div>
              <div class="info">
                <h3>Adress</h3>
                <span>Jal Tynalieva 3/3</span>
              </div>
            </div>

            <div class="card reveal">
              <div class="contact-icon">
                <FaPhone />
              </div>
              <div class="info">
                <h3>Phone</h3>
                <span>+996702892221</span>
              </div>
            </div>

            <div class="card reveal">
              <div class="contact-icon">
                <MdEmail />
              </div>
              <div class="info">
                <h3>Email Adress</h3>
                <span>ahmedov@gmail.com</span>
              </div>
            </div>

            <div class="card reveal">
              <div class="contact-icon">
                <CgWebsite />
              </div>
              <div class="info">
                <h3>Website</h3>
                <span>MyPortfolio.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

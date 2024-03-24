import React from "react";
import "./Style/Section2.css";

const Section2 = () => {
  return (
    <div>
      <div className="s2_term_container">
        <div className="s2_term_wrapper">
          <div className="s2_term_left_container">
            <div className="s2_term_list_wrapper">
              <div className="s2_term_heading">
                <h3>Ownership and intellectual property rights</h3>
              </div>
              <div className="s2_term_content">
                <p>
                  All information, content, and products available on this
                  website are the exclusive property of GetHealthy. This
                  includes but is not limited to, text, graphics, logos, icons,
                  images, audio clips, digital downloads, and software.
                </p>
              </div>
            </div>
            <div className="s2_term_list_wrapper">
              <div className="s2_term_heading">
                <h3>Reproduction and Distribution</h3>
              </div>
              <div className="s2_term_content">
                <p>
                  No part of the information, content, or products on this
                  website may be reproduced, duplicated, copied, sold, resold,
                  visited, or otherwise exploited for any commercial purpose
                  without the express written consent of GetHealthy
                </p>
              </div>
            </div>
          </div>
          <div className="s2_term_right_container">
            <div className="s2_term_list_wrapper">
              <div className="s2_term_heading">
                <h3>Request for Permission</h3>
              </div>
              <div className="s2_term_content">
                <p>
                  If you wish to use any of the content found on this website,
                  you must first obtain written permission from GetHealthy.
                  Please contact our team for further information.
                </p>
              </div>
            </div>
            <div className="s2_term_list_wrapper">
              <div className="s2_term_heading">
                <h3>Amendments and Updates</h3>
              </div>
              <div className="s2_term_content">
                <p>
                  GetHealthy reserves the right to modify these Terms &
                  Conditions. Any changes will be posted on this page, and your
                  use of the website signifies your agreement to these changes.
                  We kindly request all users to periodically review the
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

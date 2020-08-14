import React from 'react';
import Footer from './FooterComponent';

function Health() {
    return (
      <div className="vert-align">
        <div className="health-section">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="/assets/images/health.jpg"
                alt="Health Image"
                className="img-fluid rounded img-health"
              />
            </div>
            <div className="col-12 col-md-6">
              <p>
                As more and more people are getting into stressful lifestyle,
                busy schedules, unconventional career options and emotional
                problems, the health risks are increasing too. With the damage
                done by pollution, junk food, unhealthy lifestyle, substance
                abuse etc only increases the risks associated with health. In
                this distress a healthy life, management of emotions, stress and
                mental health is far ignored. It creates havoc on your health
                and lifestyle. Sometimes it can also bring harmful health risks
                and diseases which cannot even be treated! A medicinal lifestyle
                takes you through a path of connecting back to the nature and
                turning your life around for healthier choices. There are a lot
                of benefits to staying physically fit. You'll have more energy,
                you'll look great, and you'll notice improvements in your
                overall health. Unfortunately, it's not always easy to stay in
                great shape. However, if you focus on nutrition and exercise,
                you can make a lot of healthy physical changes. Don't forget
                that a positive attitude is also really important to staying fit
                and beautifully healthy. If you are looking for the path toward
                a healthier you? It's not hard to find. The journey begins with
                some simple tweaks to your lifestyle.{" "}
                <strong>
                  The right diet, exercise, and stress-relief plan all play a
                  big role.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Health;
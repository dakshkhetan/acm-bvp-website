import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll } from "react-scroll";

import "./CodeOfConduct.styles.scss";

const CodeOfConduct = ({ darkMode }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const content = () => (
    <div className="section-content">
      <h2>1. Purpose</h2>
      <p>
        A primary goal of ACM BVP is to be inclusive to the largest number of
        contributors, with technical or educational background. As such, we are
        committed to providing a friendly, safe and welcoming environment for
        all, regardless of gender, ability, ethnicity, and religion (or lack
        thereof). This code of conduct outlines our expectations for all those
        who participate in our community, as well as the consequences for
        unacceptable behavior. We invite all those who participate in ACM BVP
        activities to help us create safe and positive experiences for everyone.
      </p>

      <h2>2. Open [Source/Culture/Tech] Citizenship</h2>
      <p>
        A supplemental goal of this Code of Conduct is to increase open
        [source/culture/tech] citizenship by encouraging participants to
        recognize and strengthen the relationships between our actions and their
        effects on our community. Communities mirror the societies in which they
        exist and positive action is essential to counteract the many forms of
        inequality and abuses of power that exist in society. If you see someone
        who is making an extra effort to ensure our community is welcoming,
        friendly, and encourages all participants to contribute to the fullest
        extent, we want to know.
      </p>

      <h2>3. Expected Behavior</h2>
      <p>
        The following behaviors are expected and requested of all community
        members:
      </p>
      <ul>
        <li>
          Participate in an authentic and active way. In doing so, you
          contribute to the health and longevity of this community.
        </li>

        <li>Exercise consideration and respect in your speech and actions.</li>

        <li>Attempt collaboration before conflict.</li>

        <li>
          Refrain from demeaning, discriminatory, or harassing behavior and
          speech.
        </li>

        <li>
          Be mindful of your surroundings and of your fellow participants. Alert
          community leaders if you notice a dangerous situation, someone in
          distress, or violations of this Code of Conduct, even if they seem
          inconsequential.
        </li>

        <li>
          Remember that community event venues may be shared with members of the
          public; please be respectful to all patrons of these locations.
        </li>
      </ul>

      <h2>4. Unacceptable Behavior</h2>
      <p>
        The following behaviors are considered harassment and are unacceptable
        within our community:
      </p>
      <ul>
        <li>
          Violence, threats of violence or violent language directed against
          another person.
        </li>

        <li>
          Sexist, racist, ableist or otherwise discriminatory jokes and
          language.
        </li>

        <li>Posting or displaying sexually explicit or violent material.</li>

        <li>
          Posting or threatening to post other people’s personally identifying
          information ("doxing").
        </li>

        <li>
          Personal insults, particularly those related to gender, sexual
          orientation, race, religion, or disability.
        </li>

        <li>Inappropriate photography or recording.</li>

        <li>
          Inappropriate physical contact. You should have someone’s consent
          before touching them.
        </li>

        <li>
          Unwelcome sexual attention. This includes, sexualized comments or
          jokes; inappropriate touching, groping, and unwelcomed sexual
          advances.
        </li>

        <li>
          Deliberate intimidation, stalking or following (online or in person).
        </li>

        <li>Advocating for, or encouraging, any of the above behavior.</li>

        <li>
          Sustained disruption of community events, including talks and
          presentations.
        </li>
      </ul>

      <h2>5. Weapons Policy</h2>
      <p>
        No weapons will be allowed at ACM BVP’s events, community spaces, or in
        other spaces covered by the scope of this Code of Conduct. Weapons
        include but are not limited to guns, explosives (including fireworks),
        and large knives such as those used for hunting or display, as well as
        any other item used for the purpose of causing injury or harm to others.
        Anyone seen in possession of one of these items will be asked to leave
        immediately, and will only be allowed to return without the weapon.
        Community members are further expected to comply with all state and
        local laws on this matter.
      </p>

      <h2>6. Consequences of Unacceptable Behavior</h2>
      <p>
        Unacceptable behavior from any community member, including sponsors and
        those with decision-making authority, will not be tolerated. Anyone
        asked to stop unacceptable behavior is expected to comply immediately.
        If a community member engages in unacceptable behavior, the community
        organizers may take any action they deem appropriate, up to and
        including a temporary ban or permanent expulsion from the community
        without warning (and without refund in the case of a paid event).
      </p>

      <h2>7. Reporting Guidelines</h2>
      <p>
        If you are subject to or witness unacceptable behavior, or have any
        other concerns, please notify any of the community organizers as soon as
        possible. Additionally, community organizers are available to help
        community members engage with local law enforcement or to otherwise help
        those experiencing unacceptable behavior feel safe. In the context of
        in-person events, organizers will also provide escorts as desired by the
        person experiencing distress.
      </p>

      <h2>8. Addressing Grievances</h2>
      <p>
        If you feel you have been falsely or unfairly accused of violating this
        Code of Conduct, you should notify Bharati Vidyapeeth’s College of
        Engineering (coedelhi@bharatividyapeeth.edu) with a concise description
        of your grievance. Your grievance will be handled in accordance with our
        existing governing policies.
      </p>

      <h2>9. Scope</h2>
      <p>
        We expect all community participants (contributors, paid or otherwise;
        sponsors; and other guests) to abide by this Code of Conduct in all
        community venues–online and in-person–as well as in all one-on-one
        communications pertaining to community business. This code of conduct
        and its related procedures also applies to unacceptable behavior
        occuring outside the scope of community activities when such behavior
        has the potential to adversely affect the safety and well-being of
        community members.
      </p>

      <h2>10. Contact info</h2>
      <p>
        Ms. Sarita Yadav (Faculty Mentor) <br />
        sarita1320@yahoo.co.in, (+91) 8178081668
        <br />
        Mr. Akanshu Raj (Chairperson) <br />
        akanshuraj@gmail.com, (+91) 8920836248
        <br />
        Mr. Manbir Singh (Student Mentor) <br />
        manbirmarwah@gmail.com, (+91) 8826661919
      </p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Code of Conduct | ACM BVP</title>
      </Helmet>

      <section
        id="codeOfConduct"
        className={`section section-codeOfConduct ${darkMode ? "dark" : ""}`}
      >
        <Fade bottom>
          <h1 className="section-heading">Code of Conduct</h1>
        </Fade>
        {content()}
      </section>
    </>
  );
};

export default CodeOfConduct;

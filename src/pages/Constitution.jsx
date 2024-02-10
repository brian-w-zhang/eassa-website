import dragon_bg from '../landscapes/dragon background.jpg';
import landscape1 from '../landscapes/landscape 1.jpg';
import line from '../assets/linecool.png';
import { useEffect, useRef } from 'react';

function Constitution() {
  const constitutionSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const constitutionSection = constitutionSectionRef.current;
      if (isElementInViewport(constitutionSection, 0.7)) {
        constitutionSection.classList.add('animated');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (element, threshold = 1) => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return (
      rect.top < windowHeight * threshold &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const formattedText = `1. Name
    1.1. The Association shall be known as the East Asian Studies Students' Association, or by its acronym of EASSA.
  
2. Aim
    2.1. The aims of the EASSA shall be:
        2.1.1. To represent all students in the department of East Asian Studies of McGill University and to promote their welfare
                  and interests.
        2.1.2. To provide activities and services to enhance the educational, cultural, environmental, and social aspects of the lives
                  of its members.
    2.2. The EASSA shall be recognized by its members, the Arts Undergraduate Society, the Students Society of McGill
            University, the department of East Asian Studies and the Faculty of Arts as representative of all undergraduate students
            registered in the department of East Asian Studies of McGill University.
  
3. Membership
    3.1. The Membership of the EASSA shall include all undergraduate students currently registered at McGill University in any
           of the major, double major, honours, joint honours, and minor programs of the department of East Asian Studies. This
           membership shall be accorded “Member” status.
    3.2. Membership in the EASSA confers the right to participate in all activities organized by the EASSA as well as the right to
           attend Council meetings and to exercise full speaking rights when in attendance.
          3.2.1. The right of Members to attend meetings is subject to Section 5.4 (closed meetings).
    3.3. Non-members of the EASSA shall be known as “Observers”.
          3.3.1. Observers may attend a meeting of Council with the assent of one member of Council.
          3.3.2. Observers shall have full speaking rights at Council Meetings.
                3.3.2.1. At any one meeting, the speaking rights of an observer may be revoked by a three-quarters majority vote of
                             Council members in attendance.
          3.3.3. Rights of observers are subject to section 5.4 (closed meetings).`;

  const formattedText2 = `4. The Council
    4.1. The governing body of the EASSA shall be known as the Council and as such shall:
          4.1.1. Recognize the supremacy of this constitution and be bound by it.
          4.1.2. Be empowered to make all decisions and take action on behalf of the EASSA.
          4.1.3. Establish new Mandates of Council (tasks) to be led by individual Executives.
    4.2. The Council shall consist of:
          4.2.1. The members of the Executive, defined as all currently non-vacant positions listed under sections 6.4 and 6.7.
          4.2.2. The Councillors, this status extended as described in section 4.5 of this constitution.
    4.3. Each member of Council has full speaking rights and may exercise one vote in decisions of Council.
    4.4. Each member of Council must remain a member of the EASSA throughout their mandate.
    4.5. Attendance at two meetings of Council by a EASSA member shall trigger a vote at the start of the second such meeting
           on the extending of Councillor status to said member.
          4.5.1. Councillor status shall be granted by majority vote of the Executive.
          4.5.2. The new Councillor may from that point exercise a vote on decisions of Council.
          4.5.3. Councillors shall be given the title of representative of their class year (e.g. “U1 Representative”).
          4.5.4. The number of possible Councillors is unlimited.

5. Meetings of Council
    5.1. Quorum for a meeting of Council shall be at two-thirds of the members of the executive.
    5.2. Council shall hold regular meetings at least once every three weeks when classes are in session during the Fall and
           Winter semesters.
    5.3. Notice of all meetings shall be given to the EASSA membership in general and members of Council in particular at least
           three days in advance.
          5.3.1. In pressing and substantial cases, the Executive may decide to hold a meeting of Council as soon as possible. Such a
                    meeting shall be called an “emergency session”.
    5.4. The Council may, when it deems necessary, conduct a “closed meeting” wherein non-Council members may be
           excluded, individually or collectively, from attendance.
          5.4.1. A decision to exclude Members will require a two-thirds majority vote of the Executive.
          5.4.2. Minutes of such a meeting must be made available in such a situation within two months of the date of the closed
                    meeting.
          5.4.3. A closed meeting must be followed by a non-closed meeting to be held within 1 week following the date of the
                    closed meeting.

6. The Executive
    6.1. There shall be a special committee of Council called the Executive, which shall govern the EASSA between meetings of
            Council in a manner consistent with policies set out by Council.
    6.2. The Executive shall be a non-hierarchical body, with all members of the Executive coequal to each other.
    6.3. No Member may occupy two Executive positions at any one time.
    6.4. The executive, which shall be elected yearly in the manner described under Title III, must at least be composed of:
          6.4.1. The President
          6.4.2. The Vice-President Finance
          6.4.3. The Representative to the Arts Undergraduate Society and its Council (AUS Representative)
    6.5. Should the office of President become vacant, the title of Acting President and the duties of the President shall be 
            granted to the Vice-President Internal Affairs. If this position is also vacant, it shall pass to the Vice-President Finance.
          6.5.1. The title of Acting President may be held concurrently with any Executive position.
    6.6. If the position of Vice-President Finance or that of AUS Representative becomes vacant, it shall be filled by another
            member of the Executive whereby they will give up the title, but if it is in the best interests of the Association, not the
            duties, of their previous position.
          6.6.1. If multiple Executives wish to assume the same position, said position will be filled by means of a majority vote of
                    Executive members present at the meeting in which the assumption of the position is being discussed.
                6.6.1.1. In the case of vote involving more than two candidates, the candidate receiving the fewest votes will be
                              rejected and a new vote will occur immediately with the remaining Executives as candidates.
                6.6.1.2. In the case of a tie in a vote involving only two candidates, a coin-flip will decide the winner.
                      6.6.1.2.1. The coin shall be tossed up into the air and shall fall to the ground.
                      6.6.1.2.2. It must be called before the toss.
                      6.6.1.2.3. Either candidate has the option of declaring “best two out of three” while the coin is in the air. The flip
                                      will then be decided in this manner.
    6.7. Other Executive positions that must be included in EASSA elections as described under Title III are:
          6.7.1. The Vice-President Events
          6.7.2. The Vice-President Internal Affairs
          6.7.3. The Vice-President Academic Affairs
          6.7.4. The Vice-President Communications
          6.7.5. Fundraising Coordinator
    6.8. If no Member stands for election in any one of the positions in section 6.7, the position in question shall be declared
            vacant and its attendant duties divided up amongst the non-vacant Executive as is deemed beneficial to the Association.
    6.9. If at any point, a Councillor exists and any positions indicated in 6.7 are vacant, a Councillor may assume any one of
            these positions by declaring an intention to do so at a meeting of Council.
          6.9.1. If multiple Councillors wish to assume the same position, the new Executive member will be chosen by means of a
                    majority vote of Executive members present at the meeting in which the assumption of the position is being
                    discussed.
                6.9.1.1. In the case of a vote involving more than two candidates, the Councillor receiving the fewest votes will be
                              rejected and a new vote will occur immediately with the remaining Councillors as candidates.
                6.9.1.2. In the case of a tie in a vote involving only two candidates, a coin-flip will decide the winner.
                      6.9.1.2.1. The coin shall be tossed up into the air and shall fall to the ground.
                      6.9.1.2.2. It must be called before the toss.
                      6.9.1.2.3. Either candidate has the option of declaring “best two out of three” while the coin is in the air. The flip
                                      will then be decided in this manner.
    6.10. An executive position that is or becomes vacant later than January 1st may only be filled by means of the yearly 
              general election as described in Title III. In the interim, its attendant duties shall be divided up amongst Council as is
              deemed beneficial to the Association.

7. Powers and Duties of the Executive
    7.1. All members of the executive shall:
          7.1.1. Submit to the greater authority of Council and execute its decisions even if they conflict with the Executive's views
                    on matters within his or her jurisdiction.
          7.1.2. Submit any actions taken or decisions made between meetings of Council to be ratified at the following meeting of
                    Council.
          7.1.3. Be held accountable for the successes and failures in their Mandates of Council, and be commended or censured by
                    Council as such.
          7.1.4. Be responsible for the keeping of adequate records of their actions in order to ensure a smooth transition from one
                    year to the next.
          7.1.5. Commit to ensuring an equitable and reasonable distribution of work among the Executive.
          7.1.6. Miss no more than two meetings of Council per semester.
                7.1.6.1. Should an Executive miss more than two meetings of Council per semester, Council must take steps to
                              investigate and if necessary strip the Executive of their position by the means described in Title IV of this
                              constitution.
    7.2. The President shall:
          7.2.1. Co-ordinate and supervise the affairs of the EASSA.
          7.2.2. Ensure that EASSA Members are well served by the EASSA.
          7.2.3. Call and preside over meetings of Council.
                7.2.3.1. Should the President be unable to attend a meeting of Council, the Vice-President Internal Affairs shall call
                              and preside over the meeting. If the Vice-President Internal Affairs position is vacant, the President shall
                              designate from the Executive a replacement to call and preside over the meeting.
          7.2.4. Monitor progress in all policy and project areas in a consistent but non-intrusive manner, and report any concerns to
                    Council.
          7.2.5. Be the official spokesperson for the EASSA in a manner consistent with the policies set up by Council.
          7.2.6. Co-ordinate with other departmental-, faculty-, or university-level student societies to lobby for changes that
                    advance the interests of EASSA members and to organize events of common interest.
          7.2.7. Attend departmental meetings as the undergraduate representative where he or she shall:
                7.2.7.1. Be the official spokesperson for the EASSA in a manner consistent with the policies set up by Council.
                7.2.7.2. Take account of the proceedings and report back on them at the next meeting of Council.
                7.2.7.3. If the President is unable to attend a departmental meeting, the Vice-President Academic Affairs shall attend
                              in his stead. If the latter position is vacant, the President shall designate from the Executive a suitable
                              attendee.
    7.3. The Vice-President Finance shall:
          7.3.1. Advise Council on all financial matters of the EASSA.
          7.3.2. Prepare, present to Council for ratification, and administer the budget of the EASSA.
          7.3.3. Prepare and administer the budget of “Orientations”, the McGill student journal of East Asian Studies, if this
                    concurs with the wishes of the editorial board of Orientations.
          7.3.4. Keep proper accounts and records of the financial dealings of the EASSA.
          7.3.5. Within the realm of possibility, be consulted before any purchase made on behalf of the EASSA.
          7.3.6. Be signator for all financial powers.
          7.3.7. Ensure the prompt repayment of expenses he or she deems advantageous for the goals of the EASSA.
          7.3.8. Retain the right to refuse to refund, either in full or in part, any Executive's expenses if the Vice-President Finance
                    believes them to have been excessive or superfluous.
                7.3.8.1. This decision must be explained at the next meeting of Council, where it will be put to a majority vote of the
                             Executive.
    7.4. The AUS Representative shall:
          7.4.1. Attend Arts Undergraduate Society (AUS) council meetings, and not be absent at more than two such meetings per
                    semester.
          7.4.2. Be responsible for representing the interests of the EASSA at said council meetings.
          7.4.3. Report back to EASSA Council about the activities of the AUS.
          7.4.4. Serve as liaison with the AUS.
    7.5. The Vice-President Events shall:
          7.5.1. Organize all events to be hosted by the EASSA.
          7.5.2. Be responsible for efforts to promote EASSA events and fundraisers.
          7.5.3. Organize and carry out all promotional activities on behalf of Orientations, provided this concurs with the wishes of
                    the editorial board of said publication.
    7.6. The Vice-President Internal Affairs shall:
          7.6.1. Assist the President in co-ordinating and supervising the affairs of the EASSA.
          7.6.2. Be responsible for taking minutes during Council meetings.
          7.6.3. Be responsible for forwarding these minutes to all Executive members, all Councillors, and all others who wish to
                    receive them.
          7.6.4. Ensure the minutes are accurate, but make for at least a somewhat entertaining read.
          7.6.5. Be responsible for finding a replacement minute-taker should the Vice-President Internal Affairs not be able to
                    attend a meeting for any reason or if he or she is presiding over the meeting.
          7.6.6. Manage internal communications (e.g. If an Executive is absent from a Council meeting, the Vice-President Internal
                    Affairs shall send the Executive an e-mail to tell him or her what transpired, and what is needed of them).
          7.6.7. If at all possible, make an honest attempt to mediate in any petty squabbles that shall arise between members of
                    Council.
    7.7. The Vice-President Academic Affairs shall:
          7.7.1. Promote the academic interests of members of the EASSA to all relevant organizations and faculty (e.g. course
                    changes).
          7.7.2. Make attempts deemed necessary to gauge these academic interests (e.g. by means of meetings, surveys, etc.)
          7.7.3. Act as a peer academic advisor to Members and potential Members.
          7.7.4. Create programs, as deemed necessary, to enrich the academic life of EASSA Members (e.g. tutoring).
    7.8. The Vice-President Communications shall:
          7.8.1. Draw up a listserv with an English original and a French translation, and send it to all EASSA members.
                7.8.1.1. If he or she is not comfortable writing in both languages, a second Vice-President Communications may be
                            appointed by majority vote of the Executive to serve as translator. Until such time as a second Vice-President
                            Communications is appointed, the listserv may be sent out in English only.
                7.8.1.2. The listserv shall be sent out within one week of every meeting of Council, unless a majority vote of the
                            Executive decides that this would not be in the best interests of the Association (reasons may include, but are
                            not limited to, lack of items for inclusion).
          7.8.2. Take note at all Council meetings of what items are to be included on the listserv, then include them.
          7.8.3. Manage the Internet presence of the EASSA, including, but not limited to, its website and e-mail account.
          7.8.4. Reply promptly to all messages, electronic and otherwise, directed to the EASSA.
    7.9. The Fundraising Coordinator shall:
          7.9.1. Organize all fundraising activities on behalf of the EASSA.
          7.9.2. Organize and carry out all fundraising activities on behalf of Orientations, provided this concurs with the wishes of
                    the editorial board of said publication.
    7.10. Any other duties that may arise in the course of the year shall be divided up amongst the Executive as is deemed
            beneficial to the Association.`;

  const formattedText3 = `8. Definitions
    8.1. “Working days” shall refer to any scheduled day of classes as defined by McGill University.
    8.2. “Unsolicited e-mails” shall refer to e-mails received by an individual if the individual does not normally receive e-mails
             from the sender.
  
9. Time Period
    9.1. EASSA elections must be completed no later than the third Friday of March.

10. Location
    10.1. If ballots are to be submitted by paper (i.e. not electronically), polling shall take place either in the AUS Lounge or the
             EASSA Lounge.

11. Nominations
    11.1. Nominating period must be a minimum of five working days.
    11.2. The call for nominations must be publicized in a reasonable manner including but not limited to:
    11.2.1. The EASSA listserv.
    11.2.2. A minimum of five posters must be posted indoors on McGill campus, at least two of which must be in the East
                Asian Studies building.
    11.3. The call for nominations must provide guidelines for nomination requirements.
    11.4. All members of the association are eligible to run for an elected position.
    11.4.1. To facilitate an orderly transition, nominations for the position of President, shall, if at least one member of the
                Council members.
    11.5. If no student presents his or herself for candidacy then the position shall be left vacant, unless a reasonable alternative
             presents itself.
    11.6. Each candidate shall be eligible to run for only one position per election period.
  
12. Campaign Period
    12.1. The campaign period shall last a minimum of five working days, and shall be immediately followed by the polling
             period.
    12.2. No campaign material may be slanderous, libelous, and/or discriminatory towards another candidate and/or his or her
             position(s), nor may campaign material be degrading to any person, organization or department of McGill University or
             to any group in any way, to be judged by a reasonable standard.
    12.3. No candidate shall spend more than five Canadian dollars on campaign materials.
    12.4. No candidate shall send unsolicited e-mails or messages of any kind by any electronic medium.
    12.5. The outgoing association executive, with the exception of those seeking re-election, shall remain neutral in the campaign.
    12.6. No candidate shall exchange food, materials or gifts as a means to solicit votes.
  
13. Polling Period
    13.1. All polling must be anonymous.
    13.2. The polling period shall last for a minimum of two working days.
    13.3. All members of the association may cast only one ballot.
    13.4. Voting by proxy is prohibited.
    13.5. The counting of ballots must be completed within twenty-four hours of the completion of polling and the results are to be
             announced over the EASSA listserv.
    13.6. Paper ballots shall be stored for one week in the AUS office.
    13.6.1. After one week, unless there are disputes, the ballots shall be destroyed.
    13.6.2. Should a dispute occur, ballots shall be destroyed one week after the dispute is settled.
  
14. Contingencies, Recounts and Disputes
    14.1. All disputes regarding these by-laws or election procedures shall be settled by the AUS Chief Returning Officer (CRO).
    14.2. Candidates who wish to contest an election must do so within one week and a recount is subject to the discretion of the
             AUS CRO.
    14.3. In the event of a tie, a recount shall occur. If the recount does not break the tie, then an offer of joint-occupancy of the
             position shall be offered. If this is not acceptable then the two candidates shall flip a coin, a game which shall be 
             presided over by the AUS CRO and the outgoing EASSA President.
          14.3.1.1.1. The coin shall be tossed up into the air and shall fall to the ground.
          14.3.1.1.2. It must be called before the toss.
          14.3.1.1.3. Either candidate has the option of declaring “best two out of three” while the coin is in the air.
                            The flip will then be decided in this manner.

15. Period of Service
    15.1. The newly elected members of the Executive shall come into office on May 1 of the year in which they were elected and
             shall leave office on April 30 of the following calendar year.`;

  const formattedText4 = `
16. A member of the EASSA Council shall only be removed in extreme circumstances, such as impropriety, delinquency of
      duties, or misappropriation of funds.
17. Assent to a motion to remove a member of EASSA Council shall require a vote cast in agreement at a Council meeting by
      three-quarters of the “full executive,” that is, this ratio shall also include Executives not present at the meeting.`;

  const formattedText5 = `18. Superseding Clause
    18.1. This constitution repeals and supersedes all previous constitutions of the EASSA.
19. Amendments
    19.1. Amendments may be proposed piecemeal by individual members of Council.
    19.2. Assent to a motion to amend the Constitution of the EASSA shall require a vote cast in agreement at a Council meeting
            by three-quarters of the full executive.
          19.2.1. If assent is granted, the amendment must be forwarded to the Arts Undergraduate Society.
20. Review
    20.1. This Constitution shall be read by all members of Council before the first Council meeting of every school year.
          20.1.1. If a Council member joins Council mid-mandate, it shall be read by him or her within one week of joining.
  `;

  return (
    <>
      <div className="dragon-bg-container">
        <img className="dragon-background" src={dragon_bg} />
      </div>
      <div className="white-overlay"></div>

      <div className="topic-container">
        <img src={landscape1} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">Constitution</h1>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="topic-main-container">
        <div className="constitution-text" ref={constitutionSectionRef}>
          <p className="constitution-main-title">
            Constitution of the East Asian Studies Students&apos; Association of
            McGill University
          </p>
          <p className="constitution-title2">
            as ratified by Council February 2009
          </p>
          <p className="constitution-subtitle">Title I – The Association</p>
          <pre className="constitution-body-text">{formattedText}</pre>
          <p className="constitution-subtitle">Title II – Organization</p>
          <pre className="constitution-body-text">{formattedText2}</pre>
          <p className="constitution-subtitle">Title III – Elections</p>
          <pre className="constitution-body-text">{formattedText3}</pre>
          <p className="constitution-subtitle">
            Title IV – Removal from Office
          </p>
          <pre className="constitution-body-text">{formattedText4}</pre>
          <p className="constitution-subtitle">Title V - The Constitution</p>
          <pre className="constitution-body-text">{formattedText5}</pre>
        </div>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default Constitution;

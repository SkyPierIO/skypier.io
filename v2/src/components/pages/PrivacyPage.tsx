import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { LegalHeading, LegalList, LegalListItem, LegalPageLayout, LegalText } from './LegalPageLayout'

const purposeCategories = ['Service delivery', 'Research & development', 'Marketing', 'Compliance & protection']

const ccpaRows: {
  category: string
  categoryNote?: string
  collected: string[]
  sources: string[]
  disclosedTo: string[]
}[] = [
  {
    category: 'Identifiers (online)',
    collected: ['Device data'],
    sources: ['You', 'Third party sources', 'Automatic collection'],
    disclosedTo: ['Affiliates', 'Service providers', 'Other users and the public'],
  },
  {
    category: 'Identifiers (other)',
    collected: ['Contact data', 'Profile data', 'Data about others'],
    sources: ['You', 'Third party sources'],
    disclosedTo: ['Affiliates', 'Service providers', 'Other users and the public'],
  },
  {
    category: 'California Customer Records',
    categoryNote: '(as defined in California Civil Code section 1798.80)',
    collected: ['Contact data', 'Profile data', 'Communications', 'Marketing data', 'User-generated content', 'Data about others'],
    sources: ['You', 'Third party sources'],
    disclosedTo: ['Affiliates', 'Service providers', 'Other users and the public'],
  },
  {
    category: 'Commercial Information',
    collected: ['Marketing data', 'Online activity data'],
    sources: ['You', 'Third party sources', 'Automatic collection'],
    disclosedTo: ['Affiliates', 'Service providers'],
  },
  {
    category: 'Internet or Network Information',
    collected: ['Marketing data', 'Device data', 'Online activity data'],
    sources: ['Automatic collection'],
    disclosedTo: ['Affiliates', 'Service providers', 'Other users and the public'],
  },
  {
    category: 'Inferences',
    collected: ['Contact data', 'Profile data', 'Marketing data', 'User-generated content', 'Device data', 'Online activity data'],
    sources: ['N/A'],
    disclosedTo: ['Affiliates', 'Service providers'],
  },
  {
    category: 'Audio-Visual Information',
    collected: ['User-generated content'],
    sources: ['You'],
    disclosedTo: ['Affiliates', 'Service providers', 'Authorities and others', 'Other users and the public'],
  },
]

// Content mirrors the V1 site's privacy policy (src/pages/privacy-policy.md).
export function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" effectiveDate="April 13, 2023">
      <LegalText>
        This Privacy Policy describes how Skypier Technologies, Inc. (“Skypier IO,” “we“, “us” or “our“) handles
        personal information that we collect through our website and other digital properties that link to this Privacy
        Policy (collectively, the “Service”), as well as through social media, our marketing activities, and other
        activities described in this Privacy Policy.
      </LegalText>

      <LegalHeading>Personal information we collect</LegalHeading>
      <LegalText>
        <strong>Information you provide to us.</strong> Personal information you may provide to us through the Service
        or otherwise includes:
      </LegalText>
      <LegalList>
        <LegalListItem>
          <strong>Contact data</strong>, such as your first and last name, professional title, organizational
          affiliation, email address, and phone number.
        </LegalListItem>
        <LegalListItem>
          <strong>Profile data</strong>, such as the username and password that you may set to establish an online
          account on the Service, and any other information that you add to your account profile.
        </LegalListItem>
        <LegalListItem>
          <strong>User-generated content</strong>, such as comments, questions, feedback, messages, images, photos,
          videos and other content or information that you submit to, or use with, the Services.
        </LegalListItem>
        <LegalListItem>
          <strong>Communications</strong> that we exchange with you, including when you contact us through the Service,
          social media, or otherwise.
        </LegalListItem>
        <LegalListItem>
          <strong>Marketing data</strong>, such as your preferences for receiving our marketing communications and
          details about your engagement with them.
        </LegalListItem>
        <LegalListItem>
          <strong>Other data</strong> not specifically listed here, which we will use as described in this Privacy
          Policy or as otherwise described at the time of collection.
        </LegalListItem>
      </LegalList>
      <LegalText>
        <strong>Third party sources</strong>. We may combine personal information we receive from you with personal
        information we obtain from other sources, such as:
      </LegalText>
      <LegalList>
        <LegalListItem>
          <strong>Public sources</strong>, such as government agencies, public records, social media platforms, and
          other publicly available sources.
        </LegalListItem>
        <LegalListItem>
          <strong>Data providers</strong>, such as information services and data licensors that provide demographic and
          other information.
        </LegalListItem>
        <LegalListItem>
          <strong>Marketing partners</strong>, such as joint marketing partners and event co-sponsors.
        </LegalListItem>
        <LegalListItem>
          <strong>Third party services</strong>, such as social media services, that you use to log into, or otherwise
          link to, your Service account. This data may include your username, profile picture and other information
          associated with your account on that third party service that is made available to us based on your account
          settings on that service.
        </LegalListItem>
      </LegalList>
      <LegalText>
        <strong>Automatic data collection.</strong> We, our service providers, and our business partners may
        automatically log information about you, your computer or mobile device, and your interaction over time with
        the Service, our communications and other online services, such as:
      </LegalText>
      <LegalList>
        <LegalListItem>
          <strong>Device data</strong>, such as your computer’s or mobile device’s operating system type and version,
          manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g.,
          phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes),
          language settings, and general location information such as city, state or geographic area.
        </LegalListItem>
        <LegalListItem>
          <strong>Online activity data</strong>, such as pages you viewed, how long you spent on a page, the website
          you visited before browsing to the Service, navigation paths between pages, information about your activity
          on a page, access times and duration of access, and whether you have opened our emails or clicked links
          within them.
        </LegalListItem>
      </LegalList>
      <LegalText>
        <strong>Cookies and similar technologies.</strong> Some of the automatic collection described above is
        facilitated by the following technologies:
      </LegalText>
      <LegalList>
        <LegalListItem>
          <strong>Cookies</strong>, which are small text files that websites store on user devices and that allow web
          servers to record users’ web browsing activities and remember their submissions, preferences and login status
          as they navigate a site. Cookies used on our sites include both “session cookies” that are deleted when a
          session ends, “persistent cookies” that remain longer, “first party” cookies that we place and “third party”
          cookies that our third party business partners and service providers place.
        </LegalListItem>
        <LegalListItem>
          <strong>Web beacons</strong>, also known as pixel tags or clear GIFs, which are clear images placed in web
          content or HTML emails to record when a user visits a web page or views an email.
        </LegalListItem>
        <LegalListItem>
          <strong>Local storage technologies</strong>, like HTML5 and Flash, that provide cookie-equivalent
          functionality but can store larger amounts of data on your device outside of your browser in connection with
          specific applications.
        </LegalListItem>
      </LegalList>
      <LegalText>These technologies are used for the following purposes:</LegalText>
      <LegalList>
        <LegalListItem>
          <strong>Technical operation</strong>. To allow the technical operation of the Service, such as by remembering
          your selections and preferences as you navigate the site, and whether you are logged in when you visit
          password protected areas of the Service.
        </LegalListItem>
        <LegalListItem>
          <strong>Functionality</strong>. To provide enhanced functionality and personalization on the Service.
        </LegalListItem>
        <LegalListItem>
          <strong>Analytics</strong>. To help us understand user activity on the Service, including which pages are
          most and least visited and how visitors move around the Service, as well as user interactions with our
          emails. For example, we use Google Analytics for this purpose. You can learn more about Google Analytics and
          how to prevent the use of Google Analytics relating to your use of our sites here:{' '}
          <Link href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">
            https://tools.google.com/dlpage/gaoptout?hl=en
          </Link>
          .
        </LegalListItem>
      </LegalList>
      <LegalText>
        <strong>Data about invitees</strong>. We may offer features that help users invite their friends or contacts to
        use the Service, and may collect contact details about these invitees so that we can deliver their invitations.
        Please do not refer someone to us or share their contact details with us unless you have their permission to do
        so.
      </LegalText>

      <LegalHeading>How we use your personal information</LegalHeading>
      <LegalText>
        We may use your personal information for the following purposes or as otherwise described at the time of
        collection:
      </LegalText>
      <LegalText>
        <strong>Service delivery</strong>. We may use your personal information to:
      </LegalText>
      <LegalList>
        <LegalListItem>provide, operate and improve the Service and our business;</LegalListItem>
        <LegalListItem>facilitate your invitations to friends who you want to invite to join the Service;</LegalListItem>
        <LegalListItem>
          communicate with you about the Service, including by sending announcements, updates, security alerts, and
          support and administrative messages;
        </LegalListItem>
        <LegalListItem>
          understand your needs and interests, and personalize your experience with the Service and our communications;
          and
        </LegalListItem>
        <LegalListItem>
          provide support for the Service, and respond to your requests, questions and feedback.
        </LegalListItem>
      </LegalList>
      <LegalText>
        <strong>Research and development</strong>. We may use your personal information for research and development
        purposes, including to analyze and improve the Service and our business. As part of these activities, we may
        create aggregated, de-identified or other anonymous data from personal information we collect. We make personal
        information into anonymous data by removing information that makes the data personally identifiable to you. We
        may use this anonymous data and share it with third parties for our lawful business purposes, including to
        analyze, improve and promote the Service and our business.
      </LegalText>
      <LegalText>
        <strong>Marketing and advertising</strong>. We may collect and use your personal information to send you direct
        marketing communications. You may opt-out of our marketing communications as described in the Opt-out of
        marketing section below.
      </LegalText>
      <LegalText>
        <strong>Compliance and protection</strong>. We may use your personal information to:
      </LegalText>
      <LegalList>
        <LegalListItem>
          comply with applicable laws, lawful requests, and legal process, such as to respond to subpoenas or requests
          from government authorities;
        </LegalListItem>
        <LegalListItem>
          protect our, your or others’ rights, privacy, safety or property (including by making and defending legal
          claims);
        </LegalListItem>
        <LegalListItem>
          audit our internal processes for compliance with legal and contractual requirements or our internal policies;
        </LegalListItem>
        <LegalListItem>enforce the terms and conditions that govern the Service; and</LegalListItem>
        <LegalListItem>
          prevent, identify, investigate and deter fraudulent, harmful, unauthorized, unethical or illegal activity,
          including cyberattacks and identity theft.
        </LegalListItem>
      </LegalList>

      <LegalHeading>How we share your personal information</LegalHeading>
      <LegalText>
        We may share your personal information with the following parties and as otherwise described in this Privacy
        Policy or at the time of collection.
      </LegalText>
      <LegalText>
        <strong>Affiliates</strong>. Our corporate affiliates for purposes consistent with this Privacy Policy.
      </LegalText>
      <LegalText>
        <strong>Service providers</strong>. Third parties that provide services on our behalf or help us operate the
        Service or our business (such as hosting, information technology, customer support, email delivery, marketing,
        payment processing, consumer research and website analytics).
      </LegalText>
      <LegalText>
        <strong>Linked third party services</strong>. If you log into the Service with, or otherwise link your Service
        account to, a social media or other third party service, we may share your personal information with that third
        party service. The third party’s use of the shared information will be governed by its privacy policy and the
        settings associated with your account with the third party service.
      </LegalText>
      <LegalText>
        <strong>Professional advisors</strong>. Professional advisors, such as lawyers, auditors, bankers and insurers,
        where necessary in the course of the professional services that they render to us.
      </LegalText>
      <LegalText>
        <strong>Authorities and others</strong>. Law enforcement, government authorities, and private parties, as we
        believe in good faith to be necessary or appropriate for the compliance and protection purposes described
        above.
      </LegalText>
      <LegalText>
        <strong>Business transferees</strong>. Acquirers and other relevant participants in business transactions (or
        negotiations of or due diligence for such transactions) involving a corporate divestiture, merger,
        consolidation, acquisition, reorganization, sale or other disposition of all or any portion of the business or
        assets of, or equity interests in, Skypier IO or our affiliates (including in connection with a bankruptcy or
        similar proceedings).
      </LegalText>
      <LegalText>
        <strong>Other users and the public</strong>. Your profile and other user-generated content may be visible to
        other users of the Service and the public. For example, if you post a comment or other content on the Service,
        it can be seen, collected and used by others, including being cached, copied, screen captured or stored
        elsewhere by others (e.g., search engines), and we are not responsible for any such use of this information.
      </LegalText>

      <LegalHeading>Your choices</LegalHeading>
      <LegalText>
        <strong>Access or update your information</strong>. If you have registered for an account with us through the
        Service, you may review and update certain account information by logging into the account.
      </LegalText>
      <LegalText>
        <strong>Opt-out of marketing communications</strong>. You may opt-out of marketing-related emails by following
        the opt-out or unsubscribe instructions at the bottom of the email, or by contacting us. Please note that if
        you choose to opt-out of marketing-related emails, you may continue to receive service-related and other
        non-marketing emails.
      </LegalText>
      <LegalText>
        <strong>Do Not Track</strong>. Some Internet browsers may be configured to send “Do Not Track” signals to the
        online services that you visit. We currently do not respond to “Do Not Track” or similar signals. To find out
        more about “Do Not Track,” please visit{' '}
        <Link href="http://www.allaboutdnt.com" target="_blank" rel="noopener noreferrer">
          http://www.allaboutdnt.com
        </Link>
        .
      </LegalText>
      <LegalText>
        <strong>Linked third party platforms</strong>. If you choose to connect to the Service through your social
        media account or other third party platform, you may be able to use your settings in your account with that
        platform to limit the information we receive from it. If you revoke our ability to access information from a
        third party platform, that choice will not apply to information that we have already received from that third
        party.
      </LegalText>

      <LegalHeading>Other sites and services</LegalHeading>
      <LegalText>
        The Service may contain links to websites, mobile applications, and other online services operated by third
        parties. In addition, our content may be integrated into other online services that are not associated with us.
        These links and integrations are not an endorsement of, or representation that we are affiliated with, any
        third party. We do not control any online services operated by third parties, and we are not responsible for
        their actions. We encourage you to read the privacy policies of the other online services you use.
      </LegalText>

      <LegalHeading>Security</LegalHeading>
      <LegalText>
        We employ a number of technical, organizational and physical safeguards designed to protect the personal
        information we collect. However, security risk is inherent in all internet and information technologies and we
        cannot guarantee the security of your personal information.
      </LegalText>

      <LegalHeading>International data transfer</LegalHeading>
      <LegalText>
        We are headquartered in the United States and may use service providers that operate in the United States and
        other countries. Your personal information may be transferred to the United States or other locations where
        privacy laws may not be as protective as those in your state, province, or country.
      </LegalText>

      <LegalHeading>Children</LegalHeading>
      <LegalText>
        The Service is not intended for use by anyone under 18 years of age. If you are a parent or guardian of a child
        from whom you believe we have collected personal information in a manner prohibited by law, please contact us.
        If we learn that we have collected personal information through the Service from a child without the consent of
        the child’s parent or guardian as required by law, we will comply with applicable legal requirements to delete
        the information.
      </LegalText>

      <LegalHeading>Changes to this Privacy Policy</LegalHeading>
      <LegalText>
        We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy
        Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Service or other
        appropriate means. Any modifications to this Privacy Policy will be effective upon our posting the modified
        version (or as otherwise indicated at the time of posting). In all cases, your use of the Service after the
        effective date of any modified Privacy Policy indicates your acceptance of the modified Privacy Policy.
      </LegalText>

      <LegalHeading>How to contact us</LegalHeading>
      <LegalText>
        Email: <Link href="mailto:privacy@skypier.io">privacy@skypier.io</Link>
      </LegalText>

      <LegalHeading>California privacy rights notice</LegalHeading>
      <LegalText>
        This section describes how we collect, use, and share Personal Information of California residents and their
        rights with respect to that Personal Information. For purposes of this section, the term “
        <strong>Personal Information</strong>” has the meaning given in the California Consumer Privacy Act (“
        <strong>CCPA</strong>”) but does not include information exempted from the scope of the CCPA.
      </LegalText>
      <LegalText>
        <strong>Your California privacy rights</strong>. California residents have the rights listed below under the
        CCPA. However, these rights are not absolute, and in certain cases we may decline your request as permitted by
        law.
      </LegalText>
      <LegalList>
        <LegalListItem>
          <strong>Information</strong>. You can request the following information about how we have collected and used
          your Personal Information during the past 12 months: the categories of Personal Information that we have
          collected; the categories of sources from which we collected Personal Information; the business or commercial
          purpose for collecting and/or selling Personal Information; the categories of third parties with which we
          share Personal Information; and the categories of Personal Information that we sold or disclosed for a
          business purpose, and for each category identified, the categories of third parties to whom the Personal
          Information was sold or disclosed.
        </LegalListItem>
        <LegalListItem>
          <strong>Access</strong>. You can request a copy of the Personal Information that we have collected about you
          during the past 12 months.
        </LegalListItem>
        <LegalListItem>
          <strong>Deletion</strong>. You can ask us to delete the Personal Information that we have collected from you.
        </LegalListItem>
        <LegalListItem>
          <strong>Nondiscrimination</strong>. You are entitled to exercise the rights described above free from
          discrimination as prohibited by the CCPA.
        </LegalListItem>
      </LegalList>
      <LegalText>
        <strong>Exercising your right to information, access and deletion</strong>. You may submit requests to exercise
        your right to information, access or deletion via email to{' '}
        <Link href="mailto:privacy@skypier.io">privacy@skypier.io</Link>.
      </LegalText>
      <LegalText>
        We will need to verify your identity to process your information, access and deletion requests and reserve the
        right to confirm your California residency. To verify your identity, we may require government identification,
        a declaration under penalty of perjury or other information. We cannot process your request if you do not
        provide us with sufficient detail to allow us to understand and respond to it.
      </LegalText>
      <LegalText>
        Your authorized agent may make a request on your behalf upon our verification of the agent’s identity and our
        receipt of a copy of a valid power of attorney given to your authorized agent pursuant to California Probate
        Code Sections 4000-4465. If you have not provided your agent with such a power of attorney, you must provide
        your agent with written and signed permission to exercise your CCPA rights on your behalf, provide the
        information we request to verify your identity, and provide us with confirmation that you have given the
        authorized agent permission to submit the request.
      </LegalText>
      <LegalText>
        <strong>Personal information that we collect, use and disclose</strong>. The chart below summarizes the
        Personal Information we collect by reference to the categories of Personal Information specified in the CCPA
        (Cal. Civ. Code § 1798.140), and describes our practices currently and during the 12 months preceding the
        effective date of this Privacy Policy. The terms in the chart refer to the categories of information, sources,
        purposes and third parties described above in this Privacy Policy in more detail. Information you voluntarily
        provide to us, such as in free-form webforms, may contain other categories of personal information not
        described below. In addition to the disclosures described in the chart below, we disclose Personal Information
        as described in the How we share your personal information section above.
      </LegalText>
      <LegalText>
        We do not sell your personal information and have not sold it during the 12 months preceding the effective date
        of this Privacy Policy.
      </LegalText>

      <TableContainer sx={{ overflowX: 'auto', border: '1px solid rgba(10, 22, 48, 0.10)', borderRadius: 3 }}>
        <Table size="small" sx={{ minWidth: 720 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>
                Statutory category / Personal information we collect in this category
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Source</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Business/commercial purpose for collection</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                Categories of third parties to whom we disclose personal information for a business purpose
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ccpaRows.map((row) => (
              <TableRow key={row.category} sx={{ verticalAlign: 'top' }}>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {row.category}
                  </Typography>
                  {row.categoryNote && (
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      {row.categoryNote}
                    </Typography>
                  )}
                  {row.collected.map((item) => (
                    <Typography key={item} variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  ))}
                </TableCell>
                <TableCell>
                  {row.sources.map((item) => (
                    <Typography key={item} variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  ))}
                </TableCell>
                <TableCell>
                  {purposeCategories.map((item) => (
                    <Typography key={item} variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  ))}
                </TableCell>
                <TableCell>
                  {row.disclosedTo.map((item) => (
                    <Typography key={item} variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LegalPageLayout>
  )
}

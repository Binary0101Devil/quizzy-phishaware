
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "A company email asks you to 'verify your account details immediately' by clicking a link. The email has the company logo but was sent from 'accounts-verify@gmail.com'. What should you do?",
    options: [
      "Click the link and verify your details immediately",
      "Reply to the email asking for more information",
      "Don't click the link and report the email to your IT department",
      "Forward the email to colleagues to check if they received it too"
    ],
    correctAnswer: 2,
    explanation: "This is a phishing attempt. Legitimate companies rarely use public email domains like gmail.com. The urgent language is a pressure tactic commonly used in phishing. Always report suspicious emails to your IT department without clicking any links."
  },
  {
    id: 2,
    question: "You receive an unexpected email with an attachment named 'Invoice_details.exe'. The email claims to be from a vendor you work with. What is the safest action?",
    options: [
      "Open the attachment to check if it's a legitimate invoice",
      "Save the file but scan it with antivirus before opening",
      "Don't open the attachment and verify with the vendor through another communication channel",
      "Forward the email to your finance department"
    ],
    correctAnswer: 2,
    explanation: "Executable (.exe) files are high-risk attachments that can contain malware. Even with antivirus scanning, sophisticated malware may not be detected. The safest approach is to verify the legitimacy of the email through a separate channel before opening any attachments."
  },
  {
    id: 3,
    question: "Which of the following email sender addresses is most likely to be legitimate?",
    options: [
      "paypal-support@secure-paypal.com",
      "support@paypal.com",
      "paypal_verification@gmail.com",
      "no-reply@paypa1.com"
    ],
    correctAnswer: 1,
    explanation: "The domain 'paypal.com' is the official domain for PayPal. The others are impostor domains trying to look legitimate. Always check the exact spelling of domains - attackers often use similar-looking domains with small variations (like paypa1.com using the number '1' instead of letter 'l')."
  },
  {
    id: 4,
    question: "You're browsing and a pop-up appears saying 'Your computer is infected! Download our antivirus now to remove 39 viruses.' What should you do?",
    options: [
      "Click 'Download' to get the antivirus software",
      "Close the browser tab or window immediately",
      "Call the provided support number for help",
      "Enter your admin credentials to allow the scan"
    ],
    correctAnswer: 1,
    explanation: "This is a common scare tactic used in phishing attempts. These fake virus alerts aim to trick you into downloading malware or paying for fake security software. Close the browser window or tab immediately without clicking anything within the pop-up."
  },
  {
    id: 5,
    question: "You receive a text message saying 'Your package delivery failed. Track here: bit.ly/2xR4pMz'. You're not expecting any packages. What's the safest response?",
    options: [
      "Click the link to see what package it might be",
      "Reply asking for more information",
      "Ignore and delete the message",
      "Call the postal service to verify"
    ],
    correctAnswer: 2,
    explanation: "This is a common SMS phishing (smishing) attempt. If you're not expecting a package, this is likely a scam trying to get you to click a malicious link. Shortened URLs (like bit.ly links) can hide the actual destination. Ignore and delete such messages."
  },
  {
    id: 6,
    question: "Which of these password practices provides the BEST security?",
    options: [
      "Using the same strong password across all your accounts",
      "Changing all your passwords on the same day each month",
      "Using unique, random passwords for each account with a password manager",
      "Writing down all your passwords in a notebook kept at your desk"
    ],
    correctAnswer: 2,
    explanation: "Using unique passwords for each account prevents credential stuffing attacks (where attackers try leaked credentials on multiple sites). Password managers help you generate and store strong, unique passwords securely without having to remember them all."
  },
  {
    id: 7,
    question: "You receive an urgent email from your CEO asking you to purchase gift cards for a company event and send the codes back. What should you do first?",
    options: [
      "Purchase the gift cards immediately - it's from the CEO",
      "Verify the request through another communication channel",
      "Reply to the email asking for more details",
      "Forward the email to HR to handle it"
    ],
    correctAnswer: 1,
    explanation: "This is a common CEO fraud or business email compromise (BEC) scam. Attackers impersonate executives to trick employees into making payments or sending gift cards. Always verify unusual requests through another channel (phone call, in-person, or through official communication tools)."
  },
  {
    id: 8,
    question: "What is a key indicator that a website might not be secure for entering personal information?",
    options: [
      "It uses a blue and white color scheme",
      "It doesn't have a 'https://' in the URL",
      "It has a privacy policy link at the bottom",
      "It was launched within the last year"
    ],
    correctAnswer: 1,
    explanation: "Websites without 'https://' (note the 's') are not using secure, encrypted connections. This means data transmitted to and from the site can potentially be intercepted. Always check for 'https://' and a padlock icon in the address bar before entering sensitive information."
  },
  {
    id: 9,
    question: "What is 'spear phishing'?",
    options: [
      "A phishing attack targeting a specific individual or organization",
      "Using fishing analogies in cybersecurity training",
      "A technique to recover data from waterlogged devices",
      "An advanced antivirus scanning method"
    ],
    correctAnswer: 0,
    explanation: "Spear phishing involves highly targeted phishing attacks customized for specific individuals or organizations. Unlike general phishing which casts a wide net, spear phishing uses personalized information (often gathered from social media or data breaches) to make attacks more convincing."
  },
  {
    id: 10,
    question: "During a public Wi-Fi session at a coffee shop, what is the SAFEST approach for checking your online banking?",
    options: [
      "Use the banking app on your phone instead of the website",
      "Make sure nobody is looking over your shoulder",
      "Use a virtual private network (VPN) connection",
      "Check only the account balance, not full details"
    ],
    correctAnswer: 2,
    explanation: "Public Wi-Fi networks are vulnerable to various attacks, including 'man-in-the-middle' attacks where hackers intercept data. A VPN creates an encrypted tunnel for your data, protecting it from potential eavesdroppers on the public network."
  }
];

export default quizQuestions;

const bid = <p><span><strong>PAID INTERNSHIP</strong></span></p>
const head = <h1>Full stack - Node JS - React JS Intern</h1>

const text = <>
        Working place in Tunis - Tunisia
       <br />
        <span>Internship contract</span><br />
        Full time or part time<br /></>
      

const jobs = {
    place: <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/1x1/tn.svg" height={13} />,
    bid: bid,
    salary:'Monthly salary depending on experience',
    head: head,
    text: text,
    slug: 'pm-intern',
    task: ['Backend development in Magento or WordPress.'],
    nameProf: 'PHP DEVELOPERS',
    descript:<p>We are looking for junior FULL STACK developer to introduce on teams focused on React and Node.js. Starting with a intern contract with the intention, upon finishing the studies,to migrate to a long term contract</p>,
    mustHave: [
        'Completed a degree in computer science (or similar)',
        '1-3 years experience on similar role',
        'Relevant and CV-proven experience in PHP projects',
        'Good knowledge in PHP',
        'Knowledge in Laravel / Zend frameworks',
        'Knowledge in English spoken and written is mandatory.'
    ],
    niceToHave: [
        'Knowledge in Magento 1 and/or Magento 2',
        'Knowledge in WordPress',
        'Experience in Agile environment',
        'Knowledge in Trello, Jira, Confluence.'
    ], weOffer:[
'Career opportunities',
'English lessons',
'Chartered accountant for quarterly tax/consultancy.'
]
}
export default jobs
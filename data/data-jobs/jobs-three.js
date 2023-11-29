const bid = <p><span><strong>PAID INTERNSHIP</strong></span></p>
const head=<h1>Full stack - Node JS - React JS Intern</h1>

const text =<p>
    <strong>Working place in Tunis - Tunisia 
  <br/>
<span>Internship contract</span><br/>
Full time or part time<br/>
Monthly salary depending on experience</strong></p>



const jobs = {
    place: <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/1x1/tn.svg" height={13} />,
    bid: bid,
    head:head,
    text:text,
    slug:'php-dev-lugano',
    task: ['Backend development in Magento or WordPress.'],
    nameProf: 'PHP DEVELOPERS',
    descript:<p>We are looking for PHP developers to introduce on a team focused on Magento or WordPress.</p>,
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
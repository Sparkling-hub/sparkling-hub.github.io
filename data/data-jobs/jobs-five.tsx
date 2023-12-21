const experience = <p>PAID POSITION</p>

const head = <h3>Quality Assurance Manager</h3>

const text =
    <p>
        Full time
        <br />
        Hybrid work
    </p>


const location = <>
    <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/1x1/tn.svg" height={13} alt="" />
    <p>Tunisia, Tunis</p>
</>


const jobs = {
    id: "Tunis",
    namePosition: "Node JS - React JS Intern",
    location: location,
    experience: experience,
    head: head,
    text: text,
    slug: 'php-dev-lug-part',
    task: ['Backend development in Magento or WordPress.'],
    nameProf: 'QA Manager',
    descript: <p>We are looking for PHP developers to introduce on a team focused on Magento or WordPress.</p>,
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
    ], weOffer: [
        'Career opportunities',
        'English lessons',
        'Chartered accountant for quarterly tax/consultancy.'
    ]
}
export default jobs
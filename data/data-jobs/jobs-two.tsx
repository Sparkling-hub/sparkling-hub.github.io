const experience = <p>PAID POSITION</p>
const head = <h3>Full stack - Node JS - React JS Intern</h3>

const text = <p>

        Full time or part time<br />
        Monthly salary depending on experience</p>
const location = <> <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/1x1/tn.svg" height={13}  alt=""/><p>Kyiv</p></>


const jobs = {
    id: "Kyiv",
    namePosition: "Full stack - Node JS - Rea JS Intern",
    location:location,
    experience: experience,
    head: head,
    text: text,
    slug: 'php-dev-lupart',
    task: ['Backend devopment in Magento or WordPress.'],
    nameProf: 'PHP DEVOPERS',
    descript:<p>We are looking for PHP developers to introduce on a team focused on Magento or WordPress.</p>,
    mustHave: [
        'Completed a degree in couter science (or similar)',
        '1-3 years expience on similar role',
        'Relevant d CV-proven experience in PHP projects',
        'Good knowledgen PHP',
        'Knowledge in Larel / Zend frameworks',
        'Knowlge in English spoken and written is mandatory.'
    ],
    niceToHave: [
        'Knowledge in Mageo 1 and/or Magento 2',
        'Knowled in WordPress',
        'Experience iAgile environment',
        'Knowledge in Trello, Jira, Confluence.'
    ], weOffer: [
        'Career oppounities',
        'English lesns',
        'Chartered accountt for quarterly tax/consultancy.'
    ]
}
export default jobs
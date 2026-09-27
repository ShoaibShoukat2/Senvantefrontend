export const company = {
  name: 'Senvante',
  email: 'hello@senvante.com',
}

export const ticker = [
  'Product design',
  'Web platforms',
  'Mobile applications',
  'Intelligent systems',
  'Cloud delivery',
  'Dedicated teams',
  'Industry software',
  'Ongoing support',
]

export const heroMeta = [
  { n: '01', label: 'Web platforms', to: '/services/web-platforms' },
  { n: '02', label: 'Mobile products', to: '/services/mobile-apps' },
  { n: '03', label: 'Intelligent systems', to: '/services/intelligent-systems' },
  { n: '04', label: 'Cloud delivery', to: '/services/cloud-delivery' },
]

export const trust = [
  {
    title: 'One accountable company',
    text: 'Design, engineering, and delivery sit in the same company. You are not passed between vendors when the hard part starts.',
  },
  {
    title: 'Progress you can open',
    text: 'You see working software on a regular cadence, with decisions written down so the work stays understandable.',
  },
  {
    title: 'Care with data',
    text: 'Access, review, and restraint are part of the build. We treat customer and company data as something to protect, not to scatter.',
  },
  {
    title: 'Support after launch',
    text: 'Release is a milestone. Senvante can stay on the product — improving it with the people who own it.',
  },
]

export const services = [
  {
    slug: 'product-design',
    id: '01',
    title: 'Product design',
    summary: 'Interfaces, flows, and design systems that make a complex product feel clear.',
    text: 'We shape the experience before and alongside the build. Research, structure, visual design, and motion are decided with the people who will engineer them.',
    points: ['Research and product framing', 'Interface and motion design', 'Design systems your team can extend'],
    outcomes: ['A product people can learn quickly', 'A visual system that stays consistent', 'Screens that match how the business actually works'],
    includes: ['Discovery workshops', 'User flows and information architecture', 'Interface design', 'A design system for the team'],
    fit: 'When the product is hard to explain, or the current interface is slowing people down.',
  },
  {
    slug: 'web-platforms',
    id: '02',
    title: 'Web platforms',
    summary: 'Company sites and product applications built to stay fast, clear, and easy to change.',
    text: 'From the public website to the signed-in product, we engineer web platforms that a business can grow without starting over.',
    points: ['Company and product websites', 'Web applications', 'Performance and accessibility'],
    outcomes: ['A site that explains the offer', 'An application staff can rely on daily', 'A codebase the next release can build on'],
    includes: ['Marketing and product websites', 'Authenticated web applications', 'Performance and accessibility work', 'Content structure your team can update'],
    fit: 'When the website, the product, or both need to carry the company in public.',
  },
  {
    slug: 'mobile-apps',
    id: '03',
    title: 'Mobile applications',
    summary: 'iOS and Android products with a clear job and a native feel.',
    text: 'We design and build mobile applications around the one action people came to complete, then the account, notifications, and care that keep them coming back.',
    points: ['iOS and Android', 'Cross-platform when it fits', 'Release and store readiness'],
    outcomes: ['A short path to value', 'A product that feels at home on the phone', 'A release process the company understands'],
    includes: ['iOS and Android applications', 'Shared design language', 'Store submission support', 'Analytics for the actions that matter'],
    fit: 'When the work happens away from a desk, or the customer relationship lives on a phone.',
  },
  {
    slug: 'intelligent-systems',
    id: '04',
    title: 'Intelligent systems',
    summary: 'Practical AI inside the workflow: assistants, automation, and answers people can check.',
    text: 'We put intelligence where it removes work, and we keep a human in the loop wherever a wrong answer would be expensive.',
    points: ['Workflow automation', 'Assistants grounded in your data', 'Human review where it matters'],
    outcomes: ['Less repetitive work', 'Answers tied to your own information', 'A system staff can override'],
    includes: ['Workflow automation', 'Assistants grounded in company data', 'Review steps for sensitive decisions', 'Monitoring so the system stays trustworthy'],
    fit: 'When teams are losing hours to repetitive work, or customers need answers from your own knowledge.',
  },
  {
    slug: 'cloud-delivery',
    id: '05',
    title: 'Cloud delivery',
    summary: 'Architecture, release pipelines, and the operations that keep a product online.',
    text: 'The quiet half of a software company. We design how the product is deployed, observed, and recovered so launch is not a gamble.',
    points: ['Cloud architecture', 'CI and release pipelines', 'Observability and care'],
    outcomes: ['A path to production the team understands', 'Releases that do not depend on one person', 'A clearer view when something breaks'],
    includes: ['Cloud architecture', 'Continuous integration and release', 'Environments for build and production', 'Logging, alerts, and handover notes'],
    fit: 'When the product is ready to grow, or the current release process is fragile.',
  },
  {
    slug: 'dedicated-teams',
    id: '06',
    title: 'Dedicated teams',
    summary: 'A Senvante team that stays with the product after the first release.',
    text: 'Some companies need a partner that already knows the codebase. A dedicated team designs, builds, and improves the product on an agreed rhythm.',
    points: ['Retained design and engineering', 'Roadmap support', 'A team that knows the codebase'],
    outcomes: ['Continuity between releases', 'A team that remembers why decisions were made', 'Room to improve, not only to launch'],
    includes: ['A named design and engineering group', 'A shared roadmap', 'Regular working software', 'Care for what is already live'],
    fit: 'When the product is core to the business and should not be rebuilt by a new vendor every year.',
  },
]

export const industries = [
  {
    slug: 'financial-services',
    title: 'Financial services',
    summary: 'Software for teams that move money, risk, and trust at the same time.',
    text: 'Financial products fail in the details: permissions, audit trails, and language a customer can believe. We build software that respects those constraints.',
    pressures: ['Customers expect clarity and speed', 'Staff need an audit trail, not a spreadsheet', 'A wrong permission is a serious incident'],
    builds: ['Customer and advisor portals', 'Operations consoles for daily work', 'Onboarding and verification flows', 'Reporting the business can explain'],
    services: ['web-platforms', 'intelligent-systems', 'cloud-delivery'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    summary: 'Tools for clinics, care teams, and the people waiting on them.',
    text: 'Healthcare software has to be calm under pressure. We design for the appointment, the record, and the handoff between people who do not share a desk.',
    pressures: ['Time with a patient is short', 'Information is sensitive', 'Several roles touch the same case'],
    builds: ['Patient and staff applications', 'Scheduling and intake', 'Care-team workspaces', 'Secure access and activity history'],
    services: ['product-design', 'mobile-apps', 'web-platforms'],
  },
  {
    slug: 'commerce',
    title: 'Retail and commerce',
    summary: 'Storefronts, operations, and the systems between a sale and a delivery.',
    text: 'Commerce is a chain. We build the customer experience and the operational software that has to keep the promise the storefront made.',
    pressures: ['The offer has to be obvious', 'Inventory and orders cannot drift', 'Peaks should not take the site down'],
    builds: ['Commerce experiences', 'Order and catalog tools', 'Staff applications for stores', 'Performance work for busy periods'],
    services: ['web-platforms', 'mobile-apps', 'cloud-delivery'],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    summary: 'Software for movement: status, exceptions, and the next decision.',
    text: 'Logistics teams live in exceptions. We build surfaces that show what is moving, what is stuck, and who needs to act.',
    pressures: ['Status changes constantly', 'Exceptions are the real job', 'Field and office do not see the same picture'],
    builds: ['Live operations consoles', 'Driver and field applications', 'Exception workflows', 'Customer tracking experiences'],
    services: ['web-platforms', 'mobile-apps', 'intelligent-systems'],
  },
  {
    slug: 'education',
    title: 'Education',
    summary: 'Platforms for learners, teachers, and the institutions behind them.',
    text: 'Education software should feel guided, not crowded. We design the path through a course, a campus service, or an administrative task.',
    pressures: ['Many types of users', 'Content changes every term', 'Access has to be simple and safe'],
    builds: ['Learning and campus platforms', 'Student and faculty applications', 'Administration tools', 'Content structures teams can maintain'],
    services: ['product-design', 'web-platforms', 'mobile-apps'],
  },
  {
    slug: 'enterprise',
    title: 'Enterprise operations',
    summary: 'Internal systems that replace the pile of tools a company has outgrown.',
    text: 'When the business runs on inboxes and spreadsheets, the cost is invisible until it is large. We replace that pile with software people will actually use.',
    pressures: ['Work is split across tools', 'New staff take too long to learn the process', 'Leaders cannot see the real status'],
    builds: ['Internal platforms', 'Role-based workspaces', 'Approvals and workflows', 'Reporting for operators and leaders'],
    services: ['product-design', 'web-platforms', 'dedicated-teams'],
  },
]

export const steps = [
  {
    n: '01',
    title: 'Listen',
    text: 'We learn the business, the user, and the constraint that actually matters.',
    deliverables: ['A written picture of the problem', 'The users and the jobs they need done', 'Risks and constraints called out early'],
  },
  {
    n: '02',
    title: 'Shape',
    text: 'Interface, architecture, and a build plan you can see before the heavy work starts.',
    deliverables: ['Flows and interface direction', 'A technical approach', 'A sequenced plan with a first release'],
  },
  {
    n: '03',
    title: 'Build',
    text: 'Design and engineering in the same loop, with progress you can click.',
    deliverables: ['Working software on a regular rhythm', 'Decisions recorded as we go', 'Room to adjust before the release hardens'],
  },
  {
    n: '04',
    title: 'Stay',
    text: 'Launch is a date, not an exit. We measure, refine, and keep the product sharp.',
    deliverables: ['A release the team understands', 'Handover notes and access', 'A path to keep improving'],
  },
]

export const principles = [
  {
    title: 'Clarity',
    text: 'Every screen answers one question before it asks for another.',
  },
  {
    title: 'Craft',
    text: 'Type, motion, and engineering are one decision, made by one company.',
  },
  {
    title: 'Continuity',
    text: 'We design for the second year of the product, not only launch week.',
  },
]

export const practices = [
  {
    title: 'Design',
    text: 'Research, interface, and the visual system. The part a person feels.',
  },
  {
    title: 'Engineering',
    text: 'Web, mobile, data, and the systems that have to hold up in real use.',
  },
  {
    title: 'Delivery',
    text: 'Plans, environments, and releases that do not depend on heroics.',
  },
  {
    title: 'Care',
    text: 'Support after launch, so the company is not alone with what we built.',
  },
]

export const projectTypes = [
  'Web platform',
  'Mobile application',
  'AI and automation',
  'Product design',
  'Cloud and delivery',
  'A dedicated team',
  'Not sure yet',
]

export function getService(slug) {
  return services.find((item) => item.slug === slug)
}

export function getIndustry(slug) {
  return industries.find((item) => item.slug === slug)
}

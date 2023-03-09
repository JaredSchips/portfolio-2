export default function Resume() {
  return (
    <main className="grid justify-center">
      <a href="/jared-resume.docx" className="font-semibold mt-3">Download Resume</a>

      <h2 className="text-xl font-bold mt-5 mb-2">Front-end Proficiencies</h2>
      <ul className="pl-9 list-disc mb-10">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React, Next.js</li>
        <li>Bootstrap</li>
        <li>Tailwinds</li>
      </ul>

      <h2 className="text-lg font-bold mb-2">Back-end Proficiencies</h2>
      <ul className="pl-9 list-disc">
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
      </ul>
    </main>
  )
}

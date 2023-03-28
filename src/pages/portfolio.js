import Project from "../components/Project"
import travelrImage from "../../public/travelr.png"
import drawerImage from "../../public/drawer.png"
import noStopMusicShopImage from "../../public/no-stop-music-shop.png"
import techBlogImage from "../../public/tech-blog.png"
import noteTakerImage from "../../public/note-taker.png"
import weatherDashboardImage from "../../public/weather-dashboard.png"

export default function Portfolio() {
  return (
    <main className='grid m-auto justify-items-center p-5 sm:w-10/12 md:w-12/12'>
      <h1 className='text-3xl font-bold text-center p-5'>Portfolio</h1>

      <div className="grid grid-cols-2 justify-center gap-16">
        <Project title='travelr' src={travelrImage} url='https://github.com/JaredSchips/travelr' githubUrl='https://github.com/JaredSchips/travelr' />
        <Project title='Drawer' src={drawerImage} url='https://salty-coast-19964.herokuapp.com/' githubUrl='https://github.com/JaredSchips/drawer' />
        <Project title='No Stop Music Shop' src={noStopMusicShopImage} url='https://idestine.github.io/Group1-Project1/' githubUrl='https://github.com/IDestine/Group1-Project1' />
        <Project title='Tech Blog' src={techBlogImage} url='https://github.com/JaredSchips/tech-blog' githubUrl='https://frozen-cove-93840.herokuapp.com/' />
        <Project title='Note Taker' src={noteTakerImage} url='https://github.com/JaredSchips/note-taker' githubUrl='https://aqueous-dawn-81341.herokuapp.com/' />
        <Project title='Weather Dashboard' src={weatherDashboardImage} url='https://jaredschips.github.io/weather-dashboard/' githubUrl='https://github.com/JaredSchips/weather-dashboard' />
      </div>
    </main>
  )
}

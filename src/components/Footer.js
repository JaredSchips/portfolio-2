import Image from "next/image"
import githubLogo from "../../public/github.svg"
import linkedinLogo from "../../public/linkedin.svg"
import emailLogo from "../../public/email.svg"

export default function Footer() {
  return (
    <div>
      <hr className="m-10 border-gray-800"></hr>
      <div className="flex justify-center gap-5 pb-3">
        <a href="https://github.com/JaredSchips"><Image src={githubLogo} width={32} height={32} alt='' /></a>
        <a href="https://www.linkedin.com/in/jared-schips/"><Image src={linkedinLogo} width={32} height={32} alt='' /></a>
        <a href="mailto:jared.schips@gmail.com"><Image src={emailLogo} width={32} height={32} alt='' /></a>
      </div>
    </div>
  )
}